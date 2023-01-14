var spiralOrder = function (matrix) {
    let result = [];
    while (matrix.length > 0) {
      if (matrix.length !== 0) {
        for (let i = 0; i < matrix[0].length && matrix[0].length > 0; i++) {
          result.push(matrix[0][i]);
        }
        matrix.splice(0, 1);
      }
      // ↑ pushes the first array in matrix to result and removes it from matrix 
      if (matrix.length !== 0) {
        for (let i = 0; i < matrix.length; i++) {
          result.push(matrix[i][matrix[i].length - 1]);
          matrix[i].pop();
        }
      }
      // ↑ pushes the last element of the arrays in matrix to result and removes it from matrix
      if (matrix.length !== 0) {
        for (let i = matrix[matrix.length - 1].length; i > 0; i--) {
          result.push(matrix[matrix.length - 1].pop());
        }
        matrix.splice(matrix.length - 1, 1);
      }
      // ↑ pushes the last array in matrix to result and removes it from matrix
      if (matrix.length !== 0) {
        for (let i = matrix.length - 1; i >= 0; i--) {
          result.push(matrix[i].shift());
        }
      }
      // ↑ pushes the first element of the arrays in matrix to result and removes it from matrix
    }
    return result.filter((a) => a !== undefined);
  };