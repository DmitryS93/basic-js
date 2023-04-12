const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let lettersArray = []
  if (typeof(members) !== "object" || members === null) {
    return false
  }
  for (let i=0; i<members.length; i++) {
    if (typeof(members[i]) === "string") {
      let b = members[i].replace(/ /g,"");
      let a = b[0]
      lettersArray.push(a)
    } 
  }
  console.log(lettersArray)
  let result = lettersArray.sort().join("").toUpperCase()
  let Array2 = result.split("")
  console.log(Array2)
 let newresult = Array2.sort().join("")
  console.log(newresult)
  console.log(result)
  return newresult
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
