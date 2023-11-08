const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: 'fnAFR8uT40AAQI6-EBHvPqPCI-_pcH1xNV4RkTIo',
  domain: 'db.fauna.com',
  scheme: 'https',
});

exports.handler = async (event, context) => {
  try {
    const user = event.clientContext.user;
    const userId = user.sub;

    const userData = {
      inventory: [],
      experience: 0,
    };

    const result = await client.query(
      q.Create(
        q.Collection('users'),
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
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
