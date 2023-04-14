const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  let result = n
  let numArr = String(n).split('')
  while (result > 9) {
    let sum = 0
    for (i=0; i<numArr.length; i++) {
      sum = sum + Number(numArr[i])
    }
    result = sum
    numArr = String(sum).split('')
    console.log(numArr)
    console.log(result)
  } 
  console.log(result)
  return result
}

module.exports = {
  getSumOfDigits
};
