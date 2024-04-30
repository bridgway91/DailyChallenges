// Format any integer provided into a string with "," (commas) in the correct places.

// Example:
// For n = 100000 the function should return '100,000'
// For n = 5678545 the function should return '5,678,545'
// For n = -420902 the function should return '-420,902'

var numberFormat = function (number) { // couldve been done easily (though with a good chunk of code) enough through normal methods, but challenge seemed to want to use regex... had to look up a general use for all numbers, then reduced that down to just what i needed
    return `${number}`.replace(/(\d)(?=(?:\d{3})+(?:$))/gm,'$1,')
  };


// alernatively...

numberFormat = n => n.toLocaleString() // well i feel dumb