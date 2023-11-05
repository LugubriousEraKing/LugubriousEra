// netlify/functions/getInventory.js

exports.handler = async (event, context) => {
  // Simulate player inventory data with item IDs and quantities (replace with actual data retrieval logic).
  const playerInventory = [
    { itemId: 1, quantity: 5 },
    { itemId: 2, quantity: 3 },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(playerInventory),
  };
};
