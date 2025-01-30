// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:
// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51

// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.
// function should return a string 'NaN' if the input is not a valid number


var numberToPrice = function(number) { // again easy, replace regex makes it simple
    if((Number(number) != number) || !number) return 'NaN'
    
    let [a,b] = String(number).split('.')
    a = a.replace(/(\d)(?=(\d{3})+$)/gm,'$1,')
    b = b ? (b+'00').slice(0,2) : '00'
  
    return a + '.' + b
  }

