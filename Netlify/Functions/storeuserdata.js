const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({ secret: 'YOUR_FAUNADB_SECRET_KEY' });

exports.handler = async (event, context) => {
  try {
    const user = event.clientContext.user;
    const userId = user.sub; // Assuming user.sub is the unique user identifier from Netlify Identity

    // Define user data, e.g., character inventory or any user-specific data
    const userData = {
      // User-specific data
    };

    // Check if the user document already exists
    const existingUser = await client.query(
      q.Get(q.Match(q.Index('user_by_id'), userId))
    );

    if (!existingUser) {
      // If the user document doesn't exist, create it
      const result = await client.query(
        q.Create(
          q.Collection('user_data'),
          {
            data: {
              userId: userId,
              userData: userData,
            },
          }
        )
      );

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'User data stored successfully', result }),
      };
    } else {
      // User document already exists, you can update it if needed
      // Example:
      // const result = await client.query(
      //   q.Update(existingUser.ref, { data: { userData: userData } })
      // );

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'User data updated successfully', result: existingUser }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
