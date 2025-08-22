// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){ // had to quickly check to make sure .slice(-x.length) worked the way i wanted, but then was easy
  return ending?str.slice(-ending.length) == ending:true
}

// or...

function solution(str, ending){ // ............. im dumb
  return str.endsWith(ending);
}