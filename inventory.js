// inventory.js

// Function to create an inventory slot with specified item ID and quantity
function createInventorySlot(itemId, quantity) {
    const slot = document.createElement('div');
    slot.className = 'inventory-slot';
    slot.innerHTML = `Item ID: ${itemId} x${quantity}`;
    return slot;
}

// Function to add an item to the inventory
function addToInventory(itemId, quantity) {
    const inventory = document.querySelector('.inventory');
    let existingSlot = null;

    // Check if the item already exists in the inventory
    const slots = inventory.getElementsByClassName('inventory-slot');
    for (let i = 0; i < slots.length; i++) {
        const slot = slots[i];
        if (slot.innerHTML.includes(`Item ID: ${itemId}`)) {
            existingSlot = slot;
            break;
        }
    }

    if (existingSlot) {
        // If the item already exists, update the quantity
        const parts = existingSlot.innerHTML.split(' x');
        const newQuantity = parseInt(parts[1]) + quantity;
        existingSlot.innerHTML = `Item ID: ${itemId} x${newQuantity}`;
    } else {
        // If the item doesn't exist, create a new slot
        const slot = createInventorySlot(itemId, quantity);
        inventory.appendChild(slot);
    }
}

// Simulate loading inventory items (replace this with actual data retrieval logic)
function loadInventoryItems() {
    // Parse the inventory data provided by your server
    const items = JSON.parse(`<<YOUR_INVENTORY_DATA>>`);

    items.forEach((item) => {
        addToInventory(item.itemId, item.quantity);
    });
}

// Call the loadInventoryItems function when the page loads
window.addEventListener('load', loadInventoryItems);
