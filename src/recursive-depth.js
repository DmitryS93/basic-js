const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
 
    for (let i of arr) {
      let elementDepth = 1;
      if (Array.isArray(i)) {
        elementDepth = elementDepth + this.calculateDepth(i);
        console.log(elementDepth);
        if (elementDepth > count) {
          count = elementDepth ;
        } else {
          count = count
        }
        
      }
    }
    console.log(count)
    return count;
  }
}

module.exports = {
  DepthCalculator
};
