const ValidationPatterns = {
    NAME: /^[a-zA-Z\s]{2,30}$/,
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^[\d\s\-\+\(\)]{10,}$/,
    PASSWORD: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
};

const DebugLogger = {
    logs: [],
    maxLogs: 50,

    log(message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString();
        const log = { timestamp, message, type };
        this.logs.push(log);
        if (this.logs.length > this.maxLogs) this.logs.shift();
        this.updateConsole();
        console.log(`[${timestamp}] ${message}`);
    },

    updateConsole() {
        const debugConsole = document.getElementById('debugConsole');
        debugConsole.innerHTML = this.logs.map(log => {
            const className = `debug-${log.type}`;
            return `<p class="${className}"><span class="debug-time">[${log.timestamp}]</span> ${log.message}</p>`;
        }).join('');
        debugConsole.scrollTop = debugConsole.scrollHeight;
    },

    clear() {
        this.logs = [];
        this.updateConsole();
    }
};

const CookieManager = {
    set(name, value, days = 365) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        const secure = window.location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; ${expires}; path=/${secure}`;
        DebugLogger.log(`🍪 Cookie set: ${name}`, 'success');
    },

    get(name) {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf(nameEQ) === 0) {
                try {
                    return JSON.parse(decodeURIComponent(cookie.substring(nameEQ.length)));
                } catch (e) {
                    return null;
                }
            }
        }
        return null;
    },

    delete(name) {
        this.set(name, '', -1);
        DebugLogger.log(`🍪 Cookie deleted: ${name}`, 'warning');
    },

    getAll() {
        const cookies = {};
        const items = document.cookie.split(';');
        items.forEach(item => {
            const [key, value] = item.trim().split('=');
            if (key) {
                try {
                    cookies[key] = JSON.parse(decodeURIComponent(value));
                } catch (e) {
                    cookies[key] = value;
                }
            }
        });
        return cookies;
    }
};

class RegistrationValidator {
    constructor() {
        this.errors = {};
    }

    validateName(name) {
        const trimmedName = String(name).trim();
        if (!trimmedName) {
            this.errors.fullName = 'Name is required';
            return false;
        }
        if (!ValidationPatterns.NAME.test(trimmedName)) {
            this.errors.fullName = 'Name must be 2-30 letters only';
            return false;
        }
        delete this.errors.fullName;
        return true;
    }

    validateEmail(email) {
        const emailStr = String(email).toLowerCase().trim();
        if (!emailStr) {
            this.errors.email = 'Email is required';
            return false;
        }
        if (!ValidationPatterns.EMAIL.test(emailStr)) {
            this.errors.email = 'Please enter a valid email';
            return false;
        }
        delete this.errors.email;
        return true;
    }

    validatePhone(phone) {
        const phoneStr = String(phone).trim();
        if (!phoneStr) {
            this.errors.phone = 'Phone is required';
            return false;
        }
        if (!ValidationPatterns.PHONE.test(phoneStr)) {
            this.errors.phone = 'Please enter a valid phone number';
            return false;
        }
        delete this.errors.phone;
        return true;
    }

    validatePassword(password) {
        const passwordStr = String(password);
        if (!passwordStr) {
            this.errors.password = 'Password is required';
            return false;
        }
        if (!ValidationPatterns.PASSWORD.test(passwordStr)) {
            this.errors.password = 'Password must have 8+ chars, 1 number, 1 special char';
            return false;
        }
        delete this.errors.password;
        return true;
    }

    calculatePasswordStrength(password) {
        let strength = 0;
        const passwordStr = String(password);
        if (passwordStr.length >= 8) strength += 1;
        if (passwordStr.length >= 12) strength += 1;
        if (/[a-z]/.test(passwordStr) && /[A-Z]/.test(passwordStr)) strength += 1;
        if (/[0-9]/.test(passwordStr)) strength += 1;
        if (/[!@#$%^&*]/.test(passwordStr)) strength += 2;
        return Math.min(strength, 5);
    }

    validateAge(age) {
        const ageNum = Number(age);
        if (isNaN(ageNum)) {
            this.errors.age = 'Age must be a number';
            return false;
        }
        if (!Number.isInteger(ageNum) || ageNum < 18 || ageNum > 120) {
            this.errors.age = 'Age must be between 18 and 120';
            return false;
        }
        delete this.errors.age;
        return true;
    }

    validateGender(gender) {
        const isValidGender = Boolean(gender && gender.length > 0);
        if (!isValidGender) {
            this.errors.gender = 'Please select a gender';
            return false;
        }
        delete this.errors.gender;
        return true;
    }

    validateAll(data) {
        this.errors = {};
        const validations = [
            this.validateName(data.fullName),
            this.validateEmail(data.email),
            this.validatePhone(data.phone),
            this.validatePassword(data.password),
            this.validateAge(data.age),
            this.validateGender(data.gender)
        ];
        return validations.every(v => v === true);
    }

    getErrors() {
        return this.errors;
    }
}

class RegistrationRecord {
    constructor(formData) {
        this.id = String(Date.now());
        this.fullName = String(formData.fullName).trim();
        this.email = String(formData.email).toLowerCase().trim();
        this.phone = String(formData.phone).trim();
        this.password = String(formData.password);
        this.age = Number(formData.age);
        this.gender = String(formData.gender);
        this.newsletter = Boolean(formData.newsletter);
        this.registeredAt = new Date();
        this.registeredAtISO = this.registeredAt.toISOString();
        this.registeredAtFormatted = this.registeredAt.toLocaleString();
        this.passwordStrength = this.calculatePasswordStrength();
        this.dayOfWeek = this.registeredAt.toLocaleDateString('en-US', { weekday: 'long' });
        this.timestamp = this.registeredAt.getTime();
    }

    calculatePasswordStrength() {
        const validator = new RegistrationValidator();
        const strength = validator.calculatePasswordStrength(this.password);
        const levels = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong', 'Excellent'];
        return levels[strength - 1] || 'Weak';
    }

    toJSON() {
        return {
            id: this.id,
            fullName: this.fullName,
            email: this.email,
            phone: this.phone,
            age: this.age,
            gender: this.gender,
            newsletter: this.newsletter,
            registeredAt: this.registeredAtISO,
            registeredAtFormatted: this.registeredAtFormatted,
            dayOfWeek: this.dayOfWeek,
            passwordStrength: this.passwordStrength
        };
    }

    toCSV() {
        return `${this.fullName},${this.email},${this.phone},${this.age},${this.gender},${this.newsletter},${this.registeredAtFormatted}`;
    }
}

class HistoryManager {
    constructor() {
        this.registrations = [];
        this.loadFromStorage();
    }

    add(record) {
        this.registrations.push(record);
        this.saveToStorage();
        return record;
    }

    getAll() {
        return Array.from(this.registrations);
    }

    getById(id) {
        return this.registrations.find(reg => String(reg.id) === String(id));
    }

    deleteById(id) {
        const initialLength = this.registrations.length;
        this.registrations = this.registrations.filter(reg => String(reg.id) !== String(id));
        if (this.registrations.length < initialLength) {
            this.saveToStorage();
            return true;
        }
        return false;
    }

    clear() {
        this.registrations = [];
        this.saveToStorage();
    }

    getStats() {
        const count = this.registrations.length;
        const lastRegistration = count > 0 ? this.registrations[count - 1] : null;
        const totalAge = this.registrations.reduce((sum, reg) => sum + reg.age, 0);
        const avgAge = count > 0 ? Math.round(totalAge / count) : 0;
        const genderDist = this.registrations.reduce((acc, reg) => {
            acc[reg.gender] = (acc[reg.gender] || 0) + 1;
            return acc;
        }, {});

        return { total: count, lastRegistration, averageAge: avgAge, genderDistribution: genderDist };
    }

    saveToStorage() {
        const data = this.registrations.map(reg => reg.toJSON());
        localStorage.setItem('registrations', JSON.stringify(data));
        CookieManager.set('lastRegistrations', data.slice(-5), 365);
    }

    loadFromStorage() {
        const stored = localStorage.getItem('registrations');
        if (stored) {
            try {
                const data = JSON.parse(stored);
                this.registrations = data.map(item => {
                    const record = new RegistrationRecord(item);
                    record.registeredAt = new Date(item.registeredAt);
                    record.registeredAtISO = item.registeredAt;
                    record.registeredAtFormatted = item.registeredAtFormatted;
                    return record;
                });
            } catch (e) {
                DebugLogger.log('Failed to load history', 'error');
            }
        }
    }

    toCSV() {
        const headers = 'Full Name,Email,Phone,Age,Gender,Newsletter,Registered At\n';
        const rows = this.registrations.map(reg => reg.toCSV()).join('\n');
        return headers + rows;
    }
}

class RegistrationAPI {
    constructor(baseURL = 'http://localhost:3000') {
        this.baseURL = baseURL;
        this.timeout = 10000;
    }

    async fetchWithTimeout(url, options = {}, timeout = this.timeout) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(timeoutId);
            return response;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    async submitRegistration(registrationData) {
        const startTime = performance.now();
        DebugLogger.log('📤 Sending registration to server...', 'info');

        try {
            const response = await this.fetchWithTimeout(
                `${this.baseURL}/api/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(registrationData)
                }
            );

            const endTime = performance.now();
            const duration = Math.round(endTime - startTime);

            if (!response.ok) throw new Error(`Server error: ${response.status}`);

            const result = await response.json();
            DebugLogger.log(`✅ Registration submitted (${duration}ms)`, 'success');
            return { success: true, data: result, duration };
        } catch (error) {
            DebugLogger.log(`❌ Submission failed: ${error.message}`, 'error');
            return { success: false, error: error.message, duration: Math.round(performance.now() - startTime) };
        }
    }

    async getRegistrations() {
        try {
            const response = await this.fetchWithTimeout(`${this.baseURL}/api/registrations`);
            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            return await response.json();
        } catch (error) {
            DebugLogger.log(`Failed to fetch registrations`, 'error');
            return null;
        }
    }
}

class UIManager {
    constructor() {
        this.form = document.getElementById('registrationForm');
        this.validator = new RegistrationValidator();
        this.history = new HistoryManager();
        this.api = new RegistrationAPI();
        this.setupEventListeners();
        this.renderHistory();
        this.updateStats();
        DebugLogger.log('🚀 Application initialized', 'success');
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        document.getElementById('clearBtn').addEventListener('click', () => this.clearForm());
        document.getElementById('clearDebugBtn').addEventListener('click', () => DebugLogger.clear());
        document.getElementById('clearHistoryBtn').addEventListener('click', () => this.confirmClear());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportCSV());

        const passwordInput = document.getElementById('password');
        passwordInput.addEventListener('input', () => this.updatePasswordStrength());

        ['fullName', 'email', 'phone', 'age', 'gender'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            field.addEventListener('blur', () => this.validateField(fieldId));
            field.addEventListener('input', () => this.clearFieldError(fieldId));
        });
    }

    confirmClear() {
        if (confirm('Delete all registrations?')) {
            this.history.clear();
            this.renderHistory();
            this.updateStats();
            DebugLogger.log('📋 History cleared', 'warning');
        }
    }

    validateField(fieldId) {
        const value = document.getElementById(fieldId).value;
        let isValid = false;

        switch (fieldId) {
            case 'fullName': isValid = this.validator.validateName(value); break;
            case 'email': isValid = this.validator.validateEmail(value); break;
            case 'phone': isValid = this.validator.validatePhone(value); break;
            case 'age': isValid = this.validator.validateAge(value); break;
            case 'gender': isValid = this.validator.validateGender(value); break;
        }

        const field = document.getElementById(fieldId);
        const errorEl = document.getElementById(`${fieldId}Error`);

        if (isValid) {
            field.classList.remove('error');
            field.classList.add('success');
            if (errorEl) errorEl.classList.remove('show');
        } else {
            field.classList.remove('success');
            field.classList.add('error');
            if (errorEl) {
                errorEl.textContent = this.validator.errors[fieldId] || '';
                errorEl.classList.add('show');
            }
        }
    }

    clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorEl = document.getElementById(`${fieldId}Error`);
        field.classList.remove('error');
        if (errorEl) errorEl.classList.remove('show');
    }

    updatePasswordStrength() {
        const password = document.getElementById('password').value;
        const validator = new RegistrationValidator();
        const strength = validator.calculatePasswordStrength(password);
        const strengthBar = document.getElementById('strengthBar');
        const strengthText = document.getElementById('strengthText');
        
        strengthBar.classList.remove('weak', 'medium', 'strong');
        
        if (strength < 3) {
            strengthBar.classList.add('weak');
            strengthText.textContent = 'Password strength: Weak';
        } else if (strength < 4) {
            strengthBar.classList.add('medium');
            strengthText.textContent = 'Password strength: Medium';
        } else {
            strengthBar.classList.add('strong');
            strengthText.textContent = 'Password strength: Strong';
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        DebugLogger.log('📝 Form submission started', 'info');

        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            password: document.getElementById('password').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            newsletter: document.getElementById('newsletter').checked
        };

        if (!this.validator.validateAll(formData)) {
            DebugLogger.log('❌ Validation failed', 'error');
            this.displayErrors();
            return;
        }
        DebugLogger.log('✅ Validation passed', 'success');

        const record = new RegistrationRecord(formData);
        const startTime = performance.now();
        this.history.add(record);
        CookieManager.set(`registration_${record.id}`, record.toJSON(), 365);
        const storageTime = Math.round(performance.now() - startTime);
        
        DebugLogger.log(`💾 Saved locally in ${storageTime}ms`, 'success');
        document.getElementById('processingTime').textContent = `${storageTime}ms`;

        const result = await this.api.submitRegistration(record.toJSON());
        
        if (result.success) {
            document.getElementById('processingTime').textContent = `${result.duration}ms`;
            DebugLogger.log('🎉 Complete!', 'success');
            this.showAlert('Registration submitted!', 'success');
            this.clearForm();
        } else {
            DebugLogger.log(`⚠️ Server failed: ${result.error}`, 'warning');
            this.showAlert('Saved locally. Server unreachable.', 'warning');
        }

        this.renderHistory();
        this.updateStats();
    }

    displayErrors() {
        Object.entries(this.validator.getErrors()).forEach(([field, message]) => {
            const errorEl = document.getElementById(`${field}Error`);
            if (errorEl) {
                errorEl.textContent = message;
                errorEl.classList.add('show');
            }
        });
    }

    clearForm() {
        this.form.reset();
        document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('input, select').forEach(el => el.classList.remove('error', 'success'));
        document.getElementById('strengthBar').className = 'strength-bar';
        DebugLogger.log('🧹 Form cleared', 'info');
    }

    renderHistory() {
        const container = document.getElementById('historyContainer');
        const registrations = this.history.getAll();

        if (registrations.length === 0) {
            container.innerHTML = '<p class="empty-message">No registrations yet. Fill the form above!</p>';
            return;
        }

        const sorted = registrations.sort((a, b) => b.timestamp - a.timestamp);

        container.innerHTML = sorted.map(reg => `
            <div class="history-item">
                <button class="history-item-delete" onclick="uiManager.deleteRegistration('${reg.id}')">×</button>
                <div class="history-item-header">
                    <div class="history-item-name">${this.escapeHtml(reg.fullName)}</div>
                    <div class="history-item-time">${reg.dayOfWeek}</div>
                </div>
                <div class="history-item-details">
                    <div class="detail-row"><span class="detail-label">Email:</span><span>${this.escapeHtml(reg.email)}</span></div>
                    <div class="detail-row"><span class="detail-label">Phone:</span><span>${this.escapeHtml(reg.phone)}</span></div>
                    <div class="detail-row"><span class="detail-label">Age:</span><span>${reg.age}</span></div>
                    <div class="detail-row"><span class="detail-label">Gender:</span><span>${reg.gender}</span></div>
                    <div class="detail-row"><span class="detail-label">Newsletter:</span><span>${reg.newsletter ? '✅' : '❌'}</span></div>
                    <div class="detail-row"><span class="detail-label">Registered:</span><span>${reg.registeredAtFormatted}</span></div>
                    <div class="detail-row"><span class="detail-label">Strength:</span><span>${reg.passwordStrength}</span></div>
                </div>
            </div>
        `).join('');
    }

    deleteRegistration(id) {
        if (confirm('Delete this registration?')) {
            this.history.deleteById(id);
            this.renderHistory();
            this.updateStats();
            DebugLogger.log('🗑️ Registration deleted', 'info');
        }
    }

    updateStats() {
        const stats = this.history.getStats();
        document.getElementById('totalReg').textContent = stats.total;
        
        if (stats.lastRegistration) {
            const lastDate = new Date(stats.lastRegistration.registeredAt);
            const now = new Date();
            const diffMs = now - lastDate;
            const diffMins = Math.round(diffMs / 60000);
            const diffHours = Math.round(diffMs / 3600000);
            const diffDays = Math.round(diffMs / 86400000);
            
            let timeAgo = diffMins < 1 ? 'Just now' : diffMins < 60 ? `${diffMins}m ago` : diffHours < 24 ? `${diffHours}h ago` : `${diffDays}d ago`;
            document.getElementById('lastReg').textContent = timeAgo;
        } else {
            document.getElementById('lastReg').textContent = 'Never';
        }

        const cookieStatus = Object.keys(CookieManager.getAll()).length;
        document.getElementById('cookieStatus').textContent = `${cookieStatus} active`;
    }

    exportCSV() {
        const csv = this.history.toCSV();
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `registrations_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        DebugLogger.log('📥 CSV exported', 'success');
    }

    showAlert(message, type = 'success') {
        const style = type === 'success' 
            ? 'background: #10b981; color: white;'
            : 'background: #f59e0b; color: white;';
        
        const alert = document.createElement('div');
        alert.style.cssText = `${style} position: fixed; top: 20px; right: 20px; padding: 15px 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 1000; animation: slideIn 0.3s ease;`;
        alert.textContent = message;
        document.body.appendChild(alert);
        setTimeout(() => alert.remove(), 3000);
    }

    escapeHtml(text) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return String(text).replace(/[&<>"']/g, m => map[m]);
    }
}

let uiManager;

document.addEventListener('DOMContentLoaded', () => {
    uiManager = new UIManager();
    DebugLogger.log(`Browser: ${navigator.userAgent.split(' ').pop()}`, 'info');
    DebugLogger.log(`Online: ${navigator.onLine ? '🟢' : '🔴'}`, 'info');

    window.addEventListener('online', () => DebugLogger.log('🟢 Back online', 'success'));
    window.addEventListener('offline', () => DebugLogger.log('🔴 Connection lost', 'warning'));
});

window.addEventListener('beforeunload', (e) => {
    if (document.getElementById('registrationForm').fullName.value.trim()) {
        e.preventDefault();
        e.returnValue = '';
    }
});
