// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// - There are tests with strings up to 10 000 characters long so your code will need to be efficient.
// - The input will only consist of lowercase characters and will be at least one letter long.
// - If there are multiple solutions, return the one that appears first.

// Good luck :)


function longest(str) { // honestly had a little trouble wrapping my head around this one... got most of it done, but then kinda moved things around on a hunch until it was fully correct
    let longest = str[0]
    let temp = str[0]
    
    for (let i=1; i<str.length; i++) {
      if (str[i] >= str[i-1]) {
        temp += str[i]
        if (temp.length > longest.length) {
          longest = temp
        }
      } else {
        temp = str[i]
      }
    }
    
    return longest
  }


// alternatively...


longest = s => s.match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g).reduce((a, b) => a.length >= b.length ? a : b); // like this one, didnt know a regex could work in this situation