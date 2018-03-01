var DnaTranscriber = function() {
  this.toRnaMapping = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
};

DnaTranscriber.prototype.toRna = function(dna) {
  if (!dna.match(/^[ACGT]*$/gi)) throw new Error('Invalid input');
  for (
    var i = 0, rna = '', chars = dna.split('');
    i < chars.length;
    rna += this.toRnaMapping[chars[i++]]
  );
  return rna;
};

module.exports = DnaTranscriber;
