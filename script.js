// JavaScript code for your LugubriousEra web app

// Initialize Netlify Identity
netlifyIdentity.init();

// Function to handle a successful registration
function registrationSuccess(user) {
    alert('Registration successful!'); // Display a success message
    // You can redirect to a success page or add more functionality here
}

// Function to handle a successful login
function loginSuccess(user) {
    alert('Login successful!'); // Display a success message
    // You can redirect to a success page or add more functionality here
}

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registrationForm = document.getElementById('registration-form');
    const forgotPasswordButton = document.getElementById('forgot-password-button');

    // Add an event listener for the login form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        netlifyIdentity.login(email, password)
            .then(user => loginSuccess(user)) // Handle successful login
            .catch(error => alert('Login failed: ' + error)); // Handle login failure
    });

    // Add an event listener for the registration form
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('registration-email').value;
        const password = document.getElementById('registration-password').value;
        netlifyIdentity.signup(email, password)
            .then(user => registrationSuccess(user)) // Handle successful registration
            .catch(error => alert('Registration failed: ' + error)); // Handle registration failure
    });

    // Add an event listener for the "Forgot Your Password" button
    forgotPasswordButton.addEventListener('click', function () {
        netlifyIdentity.open('recover'); // Open the password recovery modal
    });
});
