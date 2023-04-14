const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  let newMatrix = []

  for(let i=0; i<matrix.length; i++) {
    newMatrix.push(matrix[i].slice())
  }
    for (i=0; i<newMatrix.length; i++) {
      for (j=0; j<newMatrix[0].length; j++) {
        newMatrix[i][j] = 0
      }
    }

    for (i=0; i<newMatrix.length; i++) {
      for (j=0; j<newMatrix[0].length; j++) {
        if (matrix[i][j] === true) {
          if(i===0 && j===0) {
            newMatrix[i+1][j] = newMatrix[i+1][j] + 1
            newMatrix[i+1][j+1] = newMatrix[i+1][j+1] + 1
            newMatrix[i][j+1] = newMatrix[i][j+1] + 1
          } else if (i===0 && j===(newMatrix[0].length-1)) {      
          newMatrix[i][j-1] = newMatrix[i][j-1] + 1
          newMatrix[i+1][j-1] = newMatrix[i+1][j-1] + 1
          newMatrix[i+1][j] = newMatrix[i+1][j] + 1    
          } else if (i===(newMatrix.length-1) && j===(newMatrix[0].length-1)) {   
            newMatrix[i-1][j] = newMatrix[i-1][j] + 1
            newMatrix[i-1][j-1] = newMatrix[i-1][j-1] + 1
            newMatrix[i][j-1] = newMatrix[i][j-1] + 1
          } else if (i===(newMatrix.length-1) && j=== 0) {   
            newMatrix[i-1][j] = newMatrix[i-1][j] + 1
            newMatrix[i][j+1] = newMatrix[i][j+1] + 1
            newMatrix[i-1][j+1] = newMatrix[i-1][j+1] + 1
          } else if (i === 0) {   
            newMatrix[i][j-1] = newMatrix[i][j-1] + 1
            newMatrix[i+1][j-1] = newMatrix[i+1][j-1] + 1
            newMatrix[i+1][j] = newMatrix[i+1][j] + 1
            newMatrix[i+1][j+1] = newMatrix[i+1][j+1] + 1
            newMatrix[i][j+1] = newMatrix[i][j+1] + 1
          } else if (j === 0) {   
            newMatrix[i-1][j] = newMatrix[i-1][j] + 1
            newMatrix[i+1][j] = newMatrix[i+1][j] + 1
            newMatrix[i+1][j+1] = newMatrix[i+1][j+1] + 1
            newMatrix[i][j+1] = newMatrix[i][j+1] + 1
            newMatrix[i-1][j+1] = newMatrix[i-1][j+1] + 1
          } else if (j===(newMatrix[0].length-1)) { 
            newMatrix[i-1][j] = newMatrix[i-1][j] + 1
            newMatrix[i-1][j-1] = newMatrix[i-1][j-1] + 1
            newMatrix[i][j-1] = newMatrix[i][j-1] + 1
            newMatrix[i+1][j-1] = newMatrix[i+1][j-1] + 1
            newMatrix[i+1][j] = newMatrix[i+1][j] + 1
          } else if (j===(newMatrix.length-1)) { 
            newMatrix[i-1][j] = newMatrix[i-1][j] + 1
            newMatrix[i-1][j-1] = newMatrix[i-1][j-1] + 1
            newMatrix[i][j-1] = newMatrix[i][j-1] + 1
            newMatrix[i][j+1] = newMatrix[i][j+1] + 1
            newMatrix[i-1][j+1] = newMatrix[i-1][j+1] + 1
          } else {
          newMatrix[i-1][j] = newMatrix[i-1][j] + 1
          newMatrix[i-1][j-1] = newMatrix[i-1][j-1] + 1
          newMatrix[i][j-1] = newMatrix[i][j-1] + 1
          newMatrix[i+1][j-1] = newMatrix[i+1][j-1] + 1
          newMatrix[i+1][j] = newMatrix[i+1][j] + 1
          newMatrix[i+1][j+1] = newMatrix[i+1][j+1] + 1
          newMatrix[i][j+1] = newMatrix[i][j+1] + 1
          newMatrix[i-1][j+1] = newMatrix[i-1][j+1] + 1
          }
        }
        
      }
    }
    return newMatrix
}

module.exports = {
  minesweeper
};
