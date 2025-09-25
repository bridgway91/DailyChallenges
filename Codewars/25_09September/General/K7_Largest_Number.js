// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


function solution(digits){ // was going to run a series of slices, but thats probably incredibly inefficient for large input sizes
  let max = digits.slice(0,5)
  let temp = max
  for (let i=5 ; i<digits.length ; i++) {
    temp = temp.slice(1) + digits[i]
    max = (+temp > +max) ? temp : max
  }
  return +max
}