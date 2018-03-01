var Gigasecond = function(inputDate) {
  this.storedDate = new Date(inputDate);
  this.storedDate.setTime(inputDate.getTime() + 1000000000000);
};

Gigasecond.prototype.date = function() {
  return this.storedDate;
};

module.exports = Gigasecond;
