var Cipher = function(key) {
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  this.alphabetChars = this.alphabet.split('');
  if (key !== undefined) {
    if (!key.match(/^[a-z]+$/)) throw new Error('Bad key');
    this.key = key;
  } else {
    for (let i = 0; i < 100; this.key += this.alphabetChars[Math.floor(Math.random()*25)], i++);
  }
};

Cipher.prototype.encode = function(msg) {
  var msgChars = msg.split('');
  var enc = '';
  for (var i = 0; i < msg.length; i++) {
    let indexOfKeyChar = this.alphabet.indexOf(this.key[i % this.key.length]);
    let indexOfMsgChar = this.alphabet.indexOf(msgChars[i]);
    enc += this.alphabetChars[ ( indexOfMsgChar + indexOfKeyChar ) % this.alphabet.length ];
  }
  return enc;
}

Cipher.prototype.decode = function(enc) {
  var encChars = enc.split('');
  var msg = '';
  for (var i = 0; i < enc.length; i++) {
    let indexOfKeyChar = this.alphabet.indexOf(this.key[i % this.key.length]);
    let indexOfEncChar = this.alphabet.indexOf(encChars[i]);
    if (indexOfEncChar < indexOfKeyChar) indexOfEncChar += this.alphabet.length;
    msg += this.alphabetChars[ ( indexOfEncChar - indexOfKeyChar ) % this.alphabet.length ];
  }
  return msg;
}

module.exports = Cipher;
