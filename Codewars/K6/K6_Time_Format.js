// Build up a method that takes an integer and formats it to a 'time - like' format.
// The method must raise an exception if its hour length is less than 3 digits and greater than 4.

// Example:
// solution(800); // should return '8:00'
// solution(1000); // should return '10:00'
// solution(1451); // should return '14:51'
// solution(3351); // should return '33:51'
// solution(10000); // should raise an exception


function solution(hour) { // honestly probly the easiest one of the past week
    const time = `${hour}`
    if(time.length < 3 || time.length > 4) throw Error
    
    return `${time.slice(0,-2)}:${time.slice(-2)}`
  }