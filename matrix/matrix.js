var Matrix = function(matrix) {
  // generate rows
  this.rows = matrix.split('\n').map((row) => {
    return row.split(' ');
  }).map((row) => {
    row.forEach(function(element, index) {
      row[index] = parseInt(element);
    });
    return row;
  });
  // generate columns - transpose rows
  this.columns = [];
  for (let i = 0; i < this.rows[0].length; i++) this.columns[i] = [];
  for (let i = 0; i < this.rows.length; i++)
    for (let j = 0; j < this.rows[i].length; j++)
      this.columns[j][i] = this.rows[i][j];
}

module.exports = Matrix;
