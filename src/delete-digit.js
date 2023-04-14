const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let nArr = String(n).split("")
  let index = 0
  let maxVal = Number(nArr[0])
 for (i=0; i<nArr.length; i++) {
    if (Number(nArr[i]) > maxVal) {
      maxVal = Number(nArr[i])
      index = i
    }
 }
 if (index > 0) {
 nArr.splice((index-1),1)
 } else {
  nArr.splice((index+1),1)
 }

  let result = Number(nArr.join(""))
  return result

}

module.exports = {
  deleteDigit
};
