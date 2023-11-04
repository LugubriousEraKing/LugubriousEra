// netlify/functions/getInventory.js

exports.handler = async (event, context) => {
  // Simulate player inventory data (replace with actual data retrieval logic).
  const playerInventory = {
    items: [
      { name: "Item 1", quantity: 5 },
      { name: "Item 2", quantity: 3 },
    ],
  };

  return {
    statusCode: 200,
    body: JSON.stringify(playerInventory),
  };
};
