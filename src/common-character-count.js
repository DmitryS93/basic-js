const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstArr = s1.split("")
  let secondArr = s2.split("")
   let count = 0
  console.log(firstArr)
  console.log(secondArr)

   while (firstArr.length > 0) {
    let a = secondArr.indexOf(firstArr[0])
    if (a === -1) {
      firstArr.shift();
    } else {
      count = count + 1;
      firstArr.shift();
      secondArr.splice(a, 1);
    }
  }
   console.log(count)
   return count
 }

module.exports = {
  getCommonCharacterCount
};
