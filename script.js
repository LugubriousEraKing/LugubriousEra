<html>
<head>
</head>
<body>
<script type="text/javascript" id="dcoder_script">
    // JavaScript code for your idle game

    // Initialize game variables
    let score = 0;

    // Function to increment the score
    function incrementScore() {
        score += 1;
        updateScore();
    }

    // Function to update the score on the webpage
    function updateScore() {
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = `Score: ${score}`;
    }

    // Function to handle a successful registration
    function registrationSuccess() {
        // Display a success message
        alert('Registration successful!');

        // Redirect to the registration success page
        window.location.href = 'registration_success.html';
    }

    // Function to handle a successful login
    function loginSuccess() {
        // Display a success message
        alert('Login successful!');

        // Redirect to the login success page
        window.location.href = 'success.html';
    }

    // Add an event listener for a button click to increment the score
    const button = document.getElementById("click-button");
    button.addEventListener("click", () => {
        incrementScore();
    });

    // Call the updateScore function to display the initial score
    updateScore();
</script>
</body>
</html>
