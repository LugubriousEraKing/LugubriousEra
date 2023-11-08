// login.js

// Check if Netlify Identity library is available
const netlifyIdentity = window.netlifyIdentity;
if (netlifyIdentity) {
    // Add login logic and error handling here
    // ...

    // Handle login status changes
    netlifyIdentity.on('login', (user) => {
        // Redirect to the inventory page upon successful login
        window.location.href = '/inventory.html';
    });

    netlifyIdentity.on('logout', () => {
        // Handle logout, if needed.
    });
} else {
    console.error('Netlify Identity library not found. Ensure it is properly included.');
}
