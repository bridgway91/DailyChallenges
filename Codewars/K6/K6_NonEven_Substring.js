// Given a string of integers, return the number of odd-numbered substrings that can be formed.
// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.
// solve("1341") = 7. See test cases for more examples.

// Good luck!


function solve(s){ // this one was a fking pain due to the size of the numbers the random test used... had to look in the discussions to realize JS doesnt handle trying to % large numbers well, so had to just grab the final digit (since thats all that's really relevant)
    let count=0
    for (let i=0 ; i<=s.length ; i++) {
      for (let j=s.length ; j>i ; j--) {
        let num = s.substring(i,j)
        let final = num[num.length-1]
        if (final%2) count++
      }
    }
    return count
  };

// alternatively...

function solve(s){ // looks dumb, bad code, but more drawn-out and explained version below (of mostly same method)
    return [...s].reduce((t,n,i)=>t+(+n%2?i+1:0),0);
  };
// ---
function solve(s){ // might have realized this was possible sooner after my realization that only the final digit mattered
    // initialize counter
    let counter = 0;
    // iterate over string characters
    for (let idx = 0; idx < s.length; idx++) {
      // if number is odd, increment counter by the value of its index + 1 (explanation below)
      if (Number(s[idx]) % 2 === 1) {
        counter += idx + 1;
      }
    }
    return counter;
  };
  
  /*
  the idea behind the index + 1 is that if the number is odd, any substrings that end with it
  will always be odd. so for example the number 1341, if we look at the last index, number 1, 
  all of the substrings that end with the last 1 will always be odd: 1341, 341, 41, 1. So the 
  index position tells us how many odd substrings we can count. if the number is even, 
  we don't count anything because all substrings that end with it will be even. 
  for example, 134, 34, and 4 are all even so we don't count those. 
  */