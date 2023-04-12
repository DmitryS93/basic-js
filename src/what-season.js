const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  let seasons = ["winter","spring","summer","autumn"] 
  
  if (typeof(date) === "undefined") {
    return "Unable to determine the time of year!"
  }
  try {
    date.getMonth()
  } catch (err) {
    console.log("Invalid date!")
    throw new Error("Invalid date!")
  }
  console.log(typeof(date))
  console.log(date.getMonth())
  let month = date.getMonth()

  if(month > 11 || month < 0) {
    throw new Error("Invalid date!");
  }

  if (month === 11 || month === 0 || month === 1) {
    return seasons[0];
  } else if (month === 2 || month === 3 || month === 4) {
    return seasons[1];
  } else if (month === 5 || month === 6 || month === 7) {
    return seasons[2];  
  } else if (month === 8 || month === 9 || month === 10) {
    return seasons[3];  

  }
  
}

module.exports = {
  getSeason
};
