function Binary(binNumber) {
  this.binNumber = binNumber;

  this.toDecimal = () => {
    if (!this.binNumber.match(/^[01]+$/gi)) return 0;
    var length = binNumber.length;
    return eval(binNumber.split('').map((num, index) => { return num * Math.pow(2,length-1-index); }).join('+'));
  }
}

module.exports = Binary;
