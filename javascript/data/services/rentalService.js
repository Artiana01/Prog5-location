const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const { isOverlap } = require('../utils/dateUtils');
const rentalsPath = path.join(__dirname, '../data/rentals.json');

function loadRentals() {
  const data = fs.readFileSync(rentalsPath);
  return JSON.parse(data);
}

function saveRentals(rentals) {
  fs.writeFileSync(rentalsPath, JSON.stringify(rentals, null, 2));
}

function getActiveRentalsForItem(itemId) {
  const rentals = loadRentals();
  return rentals.filter(r =>
    r.itemId === itemId && dayjs(r.endDate).isAfter(dayjs())
  );
}

function isItemAvailable(itemId, startDate, endDate) {
  const rentals = getActiveRentalsForItem(itemId);
  for (let rental of rentals) {
    if (isOverlap(rental.startDate, rental.endDate, startDate, endDate)) {
      return { available: false, nextAvailable: rental.endDate };
    }
  }
  return { available: true };
}

function addRental(itemId, startDate, endDate) {
  const rentals = loadRentals();
  rentals.push({ itemId, startDate, endDate });
  saveRentals(rentals);
}

module.exports = { getActiveRentalsForItem, isItemAvailable, addRental };
