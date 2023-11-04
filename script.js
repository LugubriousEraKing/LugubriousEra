document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registration-email').value;
    const password = document.getElementById('registration-password').value;
    
    netlifyIdentity.signup(email, password, (user) => {
        // Handle successful registration
        const message = document.getElementById('registration-message');
        message.textContent = 'Registration success: ' + user.email;
        message.style.color = 'green';
        // Redirect to the registration success page
        window.location.href = 'registration_success.html';
    }).catch((error) => {
        // Handle registration failure
        const message = document.getElementById('registration-message');
        message.textContent = 'Registration failed: ' + error;
        message.style.color = 'red';
    });
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    netlifyIdentity.login(email, password, (user) => {
        // Handle successful login
        const message = document.getElementById('login-message');
        message.textContent = 'Login success: ' + user.email;
        message.style.color = 'green';
        // Redirect to the login success page
        window.location.href = 'success.html';
    }).catch((error) => {
        // Handle login failure
        const message = document.getElementById('login-message');
        message.textContent = 'Login failed: ' + error;
        message.style.color = 'red';
    });
});
