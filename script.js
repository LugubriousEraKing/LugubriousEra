// JavaScript code for your LugubriousEra web app

// Initialize Netlify Identity
netlifyIdentity.init();

// Function to display a message on the page
function displayMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

// Function to handle a successful registration
function registrationSuccess(user) {
    displayMessage('Registration successful! You are now logged in.', 'green');
}

// Function to handle a successful login
function loginSuccess(user) {
    displayMessage('Login successful! Welcome back.', 'green');
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
            .catch(error => displayMessage('Login failed: ' + error, 'red')); // Handle login failure
    });

    // Add an event listener for the registration form
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('registration-email').value;
        const password = document.getElementById('registration-password').value;
        netlifyIdentity.signup(email, password)
            .then(user => registrationSuccess(user)) // Handle successful registration
            .catch(error => displayMessage('Registration failed: ' + error, 'red')); // Handle registration failure
    });

    // Add an event listener for the "Forgot Your Password" button
    forgotPasswordButton.addEventListener('click', function () {
        netlifyIdentity.open('recover'); // Open the password recovery modal
    });
});
