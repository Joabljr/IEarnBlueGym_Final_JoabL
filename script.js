// ===============================
// LIGHT / DARK MODE TOGGLE
// ===============================
const themeButton = document.getElementById("themeToggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}


// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});

// Toggle dark mode from the Creativity Page
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}




// ===============================
// WORKOUT OF THE DAY GENERATOR
// ===============================
const workoutButton = document.getElementById("generateWorkout");
const workoutResult = document.getElementById("workoutResult");

if (workoutButton) {
    const workouts = [
        "20 Push-Ups + 30 Squats + 1-Minute Plank",
        "15 Burpees + 20 Lunges + 25 Sit-Ups",
        "10 Pull-Ups + 20 Push-Ups + 40 Jumping Jacks",
        "1-Mile Run + 30 Crunches + 20 Mountain Climbers",
        "3 Rounds: 10 Squats, 10 Push-Ups, 10 Sit-Ups",
        "5-Minute Jog + 20 Kettlebell Swings + 15 Burpees"
    ];

    workoutButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * workouts.length);
        workoutResult.textContent = workouts[randomIndex];
    });
}



// ===============================
// MEMBERSHIP FORM VALIDATION
// ===============================
const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop form from submitting

        const errors = [];

        // Collect values
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const age = document.getElementById("age").value.trim();
        const membership = document.getElementById("membershipType").value;
        const goals = document.getElementById("goals").value.trim();
        const address = document.getElementById("address").value.trim();
        const emergency = document.getElementById("emergency").value.trim();

        // ===============================
        // VALIDATION RULES
        // ===============================

        if (fullName === "") errors.push("Full Name is required.");

        // Email format check
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            errors.push("Please enter a valid email address.");

        // Phone number check
        if (!phone.match(/^\d{3}-\d{3}-\d{4}$/))
            errors.push("Phone number must be in the format 123-456-7890.");

        // Age check
        if (age === "" || isNaN(age) || age < 10 || age > 100)
            errors.push("Age must be a number between 10 and 100.");

        if (membership === "")
            errors.push("Please select a membership type.");

        if (goals === "")
            errors.push("Please describe your fitness goals.");

        if (address === "")
            errors.push("Home address is required.");

        if (emergency === "")
            errors.push("Emergency contact name is required.");

        // ===============================
        // DISPLAY ERRORS
        // ===============================
        const errorBox = document.getElementById("errorMessages");
        errorBox.innerHTML = "";

        if (errors.length > 0) {
            let list = "<ul>";
            for (let i = 0; i < errors.length; i++) {
                list += `<li>${errors[i]}</li>`;
            }
            list += "</ul>";
            errorBox.innerHTML = list;
            errorBox.style.color = "red";
        } else {
            errorBox.style.color = "green";
            errorBox.textContent = "Form submitted successfully!";
            form.reset();
        }
    });
}
