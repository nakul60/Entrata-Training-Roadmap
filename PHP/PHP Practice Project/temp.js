document.addEventListener("DOMContentLoaded", function () {
    const feedbackGrid = document.getElementById("feedbackGrid");
    const feedbackStats = document.getElementById("feedbackStats");
    const addFeedbackBtn = document.createElement("button");

    // Button to Add Feedback
    addFeedbackBtn.textContent = "Add Feedback";
    addFeedbackBtn.classList.add("nav-btn", "add-feedback-btn");
    document.querySelector(".nav-links").appendChild(addFeedbackBtn);

    let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

    // Function to Render Feedback
    function renderFeedback() {
        feedbackGrid.innerHTML = "";

        if (feedbackList.length === 0) {
            feedbackGrid.innerHTML = "<p>No feedback available. Be the first to share your experience!</p>";
            return;
        }

        feedbackList
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sorting by date (latest first)
            .forEach((feedback, index) => {
                const feedbackCard = document.createElement("div");
                feedbackCard.classList.add("feedback-card");

                feedbackCard.innerHTML = `
                    <div class="feedback-header">
                        <span class="feedback-user"><strong>${feedback.name}</strong></span>
                        <span class="feedback-city">${feedback.city}</span>
                    </div>
                    <div class="rating">
                        <div class="stars">${generateStars(feedback.rating)}</div>
                        <span class="rating-value">${feedback.rating}</span>
                    </div>
                    <p class="feedback-text">${feedback.comment}</p>
                    <span class="feedback-date">${feedback.date}</span>
                    <button class="delete-feedback-btn" data-index="${index}">Delete</button>
                `;

                feedbackGrid.appendChild(feedbackCard);
            });

        updateFeedbackStats();
    }

    // Function to Update Feedback Statistics
    function updateFeedbackStats() {
        const totalReviews = feedbackList.length;
        const avgRating =
            totalReviews > 0
                ? (feedbackList.reduce((sum, feedback) => sum + feedback.rating, 0) / totalReviews).toFixed(1)
                : 0;

        feedbackStats.innerHTML = `
            <div class="stat-card">
                <div class="stat-value">${totalReviews}</div>
                <div class="stat-label">Total Reviews</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${avgRating}</div>
                <div class="stat-label">Average Rating</div>
            </div>
        `;
    }

    // Function to Generate Star Ratings
    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? '<span class="star half">★</span>' : '';
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return "★".repeat(fullStars) + halfStar + "☆".repeat(emptyStars);
    }

    // Show Feedback Form
    addFeedbackBtn.addEventListener("click", function () {
        showFeedbackForm();
    });

    function showFeedbackForm() {
        const formOverlay = document.createElement("div");
        formOverlay.classList.add("form-overlay");

        formOverlay.innerHTML = `
            <div class="feedback-form">
                <h2>Add Feedback</h2>
                <label for="name">Your Name</label>
                <input type="text" id="name" required>
                
                <label for="city">Select City</label>
                <select id="city">
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                </select>
                
                <label for="spot">Tourist Spot</label>
                <select id="spot">
                    <option value="Gateway of India">Gateway of India</option>
                    <option value="Red Fort">Red Fort</option>
                    <option value="Lalbagh Garden">Lalbagh Garden</option>
                </select>

                <label for="rating">Rating</label>
                <input type="number" id="rating" min="1" max="5" step="0.1" required>
                
                <label for="comment">Your Feedback</label>
                <textarea id="comment" rows="3" required></textarea>

                <div class="form-actions">
                    <button id="submitFeedback">Submit</button>
                    <button id="cancelFeedback">Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(formOverlay);

        document.getElementById("cancelFeedback").addEventListener("click", function () {
            document.body.removeChild(formOverlay);
        });

        document.getElementById("submitFeedback").addEventListener("click", function () {
            const name = document.getElementById("name").value;
            const city = document.getElementById("city").value;
            const spot = document.getElementById("spot").value;
            const rating = parseFloat(document.getElementById("rating").value);
            const comment = document.getElementById("comment").value;
            const date = new Date().toISOString().split("T")[0];

            if (!name || !city || !spot || !rating || !comment) {
                alert("Please fill all fields.");
                return;
            }

            const newFeedback = { name, city, spot, rating, comment, date };
            feedbackList.push(newFeedback);
            localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

            renderFeedback();
            document.body.removeChild(formOverlay);
        });
    }

    // Event Listener to Delete Feedback
    feedbackGrid.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-feedback-btn")) {
            const index = event.target.getAttribute("data-index");
            feedbackList.splice(index, 1);
            localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
            renderFeedback();
        }
    });

    // Initial Render
    renderFeedback();
});
