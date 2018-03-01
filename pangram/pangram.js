var Pangram = function(sentence) {
  this.sentenceChars = sentence.toLowerCase().replace(/ /g, '').split('');
};

Pangram.prototype.isPangram = function() {
  var letters = [];
  for (var i = 0; i < this.sentenceChars.length; i++)
    if ((this.sentenceChars[i].match(/[a-z]/gi)) && (!letters.includes(this.sentenceChars[i])))
      letters.push(this.sentenceChars[i]);
  return (letters.length === 26);
};

module.exports = Pangram;
