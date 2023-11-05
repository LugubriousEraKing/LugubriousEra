const fetch = require('node-fetch');
const storeUserDataUrl = '/.netlify/functions/storeuserdata';

exports.handler = async (event, context) => {
  try {
    const { email, password } = JSON.parse(event.body);

    // Perform user login logic here, e.g., with Netlify Identity.
    // - Authenticate the user using the provided email and password.
    // - Handle login errors, such as incorrect credentials.

    // Assuming you have successfully authenticated the user
    const user = event.clientContext.user;

    // Make a POST request to storeuserdata function
    const response = await fetch(storeUserDataUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token.access_token}`,
      },
    });

    if (response.ok) {
      // Redirect to the inventory page upon successful login
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Login successful!', redirectTo: '/inventory.html' }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error creating user document in FaunaDB' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Login failed. Please check your credentials.' }),
    };
  }
};
