const dayjs = require('dayjs');

function isValidDateRange(start, end) {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  return startDate.isValid() && endDate.isValid() && endDate.diff(startDate, 'day') >= 1;
}

function isOverlap(start1, end1, start2, end2) {
  return !(dayjs(end1).isBefore(start2) || dayjs(start1).isAfter(end2));
}

function isFuture(date) {
  return dayjs(date).isAfter(dayjs());
}

module.exports = { isValidDateRange, isOverlap, isFuture };