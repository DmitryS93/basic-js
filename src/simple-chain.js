const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resultArray: [],
  getLength() {
    return this.resultArray.length;
  },
  addLink(value) {
    if (value === null) {
      value = "null"
    } else if (value === undefined) {
        value = ""
    } else if (value === 0) {
      value = "0"
    }  else if (value === false) {
      value = "false"
    } else if(value) {
    } else if (isNaN(value)) {
      value = "NaN"  
    } else {
    value = "()";
    }
    this.resultArray.push(value);
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) == false ||  position > this.resultArray.length || position < 1 || isNaN(position)) {
      this.resultArray = []
      throw new Error("You can\'t remove incorrect link!")
    }
    position -= 1;
    this.resultArray.splice(position, 1);
    return this
  },
  reverseChain() {
    this.resultArray = this.resultArray.reverse();
    return this
  },
  finishChain() {
    let result = this.resultArray
    this.resultArray = []
    return "( " + result.join(" )~~( ") + " )";
  }
};

module.exports = {
  chainMaker
};
