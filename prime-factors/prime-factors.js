var primeFactors = {
  for: function(input) {
    var factors = [];
    let num = input;
    for (let i = 2; num > 1;) {
      if ((num % i) === 0) {
        factors.push(i);
        num /= i;
      } else {
        i++;
      }
    }
    return factors;
  }
}

module.exports = primeFactors;
