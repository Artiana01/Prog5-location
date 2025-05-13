const fs = require('fs');
const path = require('path');
const itemsPath = path.join(__dirname, '../data/items.json');

function getAllItems() {
  const data = fs.readFileSync(itemsPath);
  return JSON.parse(data);
}

function getItemById(id) {
  const items = getAllItems();
  return items.find(item => item.id === id);
}

module.exports = { getAllItems, getItemById };