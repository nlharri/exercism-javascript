//function reverseString(string) {
reverseString = function (string) {
  for (var reverse = '', i = string.length-1; i >= 0 ; reverse += string.charAt(i--));
  return reverse;
};

module.exports = reverseString;
