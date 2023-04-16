const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let repeatTimes = options.repeatTimes
  let separator = ""
  if (options.separator) {
    separator = options.separator
  } else {
    separator = "+"
  }
  let addition = ""
  if (options.addition) {
    addition = String(options.addition)
  } else if  (options.addition = false) {
    addition = "false"
  } else {
    addition = ""
  }
  
  let additionRepeatTimes = options.additionRepeatTimes
  let additionSeparator = ""
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator
  } else {
    additionSeparator = "|"
  }
  let strForRepeat = String(str)
  
  let addStr = "";
  for (i=1; i<additionRepeatTimes; i++) {
    addStr += addition + additionSeparator
  } 
  addStr = addStr+addition
  
  let result = ""
  for (i=1; i<repeatTimes; i++) {
    result += strForRepeat + addStr + separator
  } 
  result = result + strForRepeat + addStr
  console.log(result)
  return result
  }

module.exports = {
  repeater
};
