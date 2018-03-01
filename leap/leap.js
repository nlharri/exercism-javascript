//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
  Year.prototype.year = year;
};

Year.prototype.isLeap = function () {
  let yr = Year.prototype.year;
  if (yr % 4 == 0) {
    if (yr % 100 == 0) {
      if (yr % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else return true;
  } else return false;
};

module.exports = Year;
