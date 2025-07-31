// You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.
// Return an array containing all the possibilities you can reach substituing the ? for a value.

// Examples
// '101?' -> ['1010', '1011']
// '1?1?' -> ['1010', '1110', '1011', '1111']

// Notes:
// Don't worry about sorting the output.
// Your string will never be empty.
// Have fun!


function possibilities(str) { // really easy...
  let res = [str];
  
  while (res[0].includes('?')) {
    let cur = res.shift();
    let idx = cur.indexOf('?');
    res.push(
      cur.slice(0, idx) + '0' + cur.slice(idx + 1),
      cur.slice(0, idx) + '1' + cur.slice(idx + 1)
    );
  }
  
  return res;
}

// or...

const possibilities = (s) => // damn... neat... 
  s.includes("?")
    ? [...possibilities(s.replace("?", "0")), ...possibilities(s.replace("?", "1"))]
    : [s];