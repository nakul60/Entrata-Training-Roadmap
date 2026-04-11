const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ limit: '10kb', extended: true }));
app.use(express.static(path.join(__dirname)));

const dataFile = path.join(__dirname, 'registrations_data.json');

if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify({ registrations: [], lastUpdated: new Date().toISOString() }, null, 2));
}

let registrations = [];

function loadData() {
    try {
        const data = fs.readFileSync(dataFile, 'utf8');
        const parsed = JSON.parse(data);
        registrations = parsed.registrations || [];
        console.log(`✅ Loaded ${registrations.length} registrations`);
    } catch (error) {
        console.log('⚠️ Starting fresh:', error.message);
        registrations = [];
    }
}

function saveData() {
    try {
        const data = {
            registrations,
            lastUpdated: new Date().toISOString(),
            totalCount: registrations.length
        };
        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('❌ Error saving data:', error.message);
    }
}

loadData();

class ServerValidator {
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(String(email).toLowerCase().trim());
    }

    static isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        return phoneRegex.test(phone);
    }

    static isValidPassword(password) {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    }

    static isValidName(name) {
        const nameRegex = /^[a-zA-Z\s]{2,30}$/;
        return nameRegex.test(String(name).trim());
    }

    static isValidAge(age) {
        const ageNum = Number(age);
        return Number.isInteger(ageNum) && ageNum >= 18 && ageNum <= 120;
    }

    static validateRegistration(data) {
        const errors = [];

        if (!this.isValidName(data.fullName)) errors.push('Invalid name');
        if (!this.isValidEmail(data.email)) errors.push('Invalid email');
        if (!this.isValidPhone(data.phone)) errors.push('Invalid phone');
        if (!this.isValidPassword(data.password)) errors.push('Password too weak');
        if (!this.isValidAge(data.age)) errors.push('Invalid age (18-120)');
        if (!data.gender || !['Male', 'Female', 'Other'].includes(data.gender)) errors.push('Invalid gender');

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        registrationsCount: registrations.length
    });
});

app.get('/api/registrations', (req, res) => {
    console.log(`📥 GET /api/registrations - ${registrations.length} records`);
    res.json({
        success: true,
        data: registrations,
        count: registrations.length,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/registrations/:id', (req, res) => {
    const { id } = req.params;
    const registration = registrations.find(reg => String(reg.id) === String(id));

    if (!registration) {
        return res.status(404).json({ success: false, error: 'Not found' });
    }

    console.log(`📥 Found registration ${id}`);
    res.json({ success: true, data: registration });
});

app.post('/api/register', (req, res) => {
    const startTime = Date.now();
    console.log('\n🔔 NEW REGISTRATION');
    console.log('━'.repeat(50));

    const { fullName, email, phone, age, gender, newsletter } = req.body;
    console.log(`📝 ${fullName} | ${email}`);

    console.log('\n🔍 Validating...');
    const validation = ServerValidator.validateRegistration(req.body);

    if (!validation.isValid) {
        console.log('❌ Validation failed:');
        validation.errors.forEach(error => console.log(`   - ${error}`));
        return res.status(400).json({
            success: false,
            error: 'Validation failed',
            details: validation.errors
        });
    }
    console.log('✅ Valid');

    const existingEmail = registrations.find(reg => reg.email === email);
    if (existingEmail) {
        console.log('⚠️ Email already exists');
        return res.status(409).json({ success: false, error: 'Email already registered' });
    }

    const registration = {
        id: String(Date.now()),
        fullName,
        email,
        phone,
        age: Number(age),
        gender,
        newsletter: Boolean(newsletter),
        registeredAt: new Date().toISOString(),
        serverReceivedAt: new Date().toISOString(),
        ipAddress: req.ip,
        userAgent: req.headers['user-agent']
    };

    console.log('\n💾 Saving...');
    registrations.push(registration);
    saveData();

    const processingTime = Date.now() - startTime;

    console.log(`✨ SUCCESS (${processingTime}ms)`);
    console.log(`📊 Total: ${registrations.length}`);
    console.log('━'.repeat(50) + '\n');

    res.status(201).json({
        success: true,
        message: 'Saved',
        data: registration,
        stats: {
            processingTime,
            totalRegistrations: registrations.length,
            timestamp: new Date().toISOString()
        }
    });
});

app.delete('/api/registrations/:id', (req, res) => {
    const { id } = req.params;
    const index = registrations.findIndex(reg => String(reg.id) === String(id));

    if (index === -1) {
        return res.status(404).json({ success: false, error: 'Not found' });
    }

    const deleted = registrations.splice(index, 1);
    saveData();

    console.log(`🗑️ Deleted ${id}`);
    res.json({ success: true, message: 'Deleted', data: deleted[0] });
});

app.get('/api/stats', (req, res) => {
    const stats = {
        totalRegistrations: registrations.length,
        lastRegistration: registrations.length > 0 ? registrations[registrations.length - 1] : null,
        genderDistribution: {},
        ageStats: {
            average: 0,
            min: 0,
            max: 0
        }
    };

    if (registrations.length > 0) {
        registrations.forEach(reg => {
            stats.genderDistribution[reg.gender] = (stats.genderDistribution[reg.gender] || 0) + 1;
        });

        const ages = registrations.map(reg => Number(reg.age));
        stats.ageStats.average = Math.round(ages.reduce((a, b) => a + b, 0) / ages.length);
        stats.ageStats.min = Math.min(...ages);
        stats.ageStats.max = Math.max(...ages);
    }

    console.log(`📊 Stats retrieved`);
    res.json({ success: true, data: stats });
});

app.delete('/api/registrations', (req, res) => {
    const count = registrations.length;
    registrations = [];
    saveData();

    console.log(`🗑️ Cleared ${count} registrations`);
    res.json({ success: true, message: `${count} cleared`, removedCount: count });
});

app.get('/api/export/csv', (req, res) => {
    if (registrations.length === 0) {
        return res.status(400).json({ success: false, error: 'No data' });
    }

    let csv = 'ID,Full Name,Email,Phone,Age,Gender,Newsletter,Registered At\n';
    csv += registrations.map(reg => 
        `${reg.id},${reg.fullName},${reg.email},${reg.phone},${reg.age},${reg.gender},${reg.newsletter},${reg.registeredAt}`
    ).join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=registrations.csv');
    res.send(csv);

    console.log(`📥 CSV export - ${registrations.length} records`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((err, req, res, next) => {
    console.error('❌ Error:', err.message);
    res.status(500).json({
        success: false,
        error: 'Server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
    });
});

app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Not found' });
});

app.listen(PORT, () => {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 Registration Tracker Server');
    console.log('='.repeat(60));
    console.log(`\n📍 http://localhost:${PORT}`);
    console.log(`💾 Data file: ${dataFile}`);
    console.log(`📊 Registrations: ${registrations.length}\n`);
    console.log('Endpoints:');
    console.log('  POST   /api/register              New registration');
    console.log('  GET    /api/registrations         All registrations');
    console.log('  GET    /api/stats                 Statistics');
    console.log('  DELETE /api/registrations         Clear all\n');
    console.log('='.repeat(60) + '\n');
});

process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down...');
    saveData();
    console.log('✅ Data saved');
    process.exit(0);
});
