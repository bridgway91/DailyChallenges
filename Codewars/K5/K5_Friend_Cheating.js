// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:
// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.
// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth!

// Examples:
// removNb(26) should return [(15, 21), (21, 15)]


function removeNb (n) { // was kinda hard.. pretty easily found a O^N solution involving 2x for-loops, but that was too slow for some tests... discussions hinted that a single for-loop was doable, so struggled with that for a bit, had the idea of trying to utilize mod somehow and wound up getting the answer! i'm not entirely sure *why* it works, but it does!
    let res = []
    const total = (n * (n+1)) / 2
    for (let a=1; a<=n; a++) {
      let t = total - a
      let b = (t%a)+a
      if(t-b == a*b) {
        res.push([a,b])
        res.push([b,a])
      }
    }
    return res.sort((a,b)=>a[0]-b[0])
  }

// or

function removeNb (n) { // really good idea! didnt think of it... BUT, some optimizations mentioned by others... "Great explanation and definitely better algebra than I remember from school. It is a bit slow though. You can speed it up quite a bit if you start a = Math.floor(n/2) as it will never be less than that in an answer. Then a second big speedup is to push the mirror of each match and then change your end of loop variable and then just sort the result to match what the tests expect." and also needs to ensure a!=b
    // from the instruction:
    // a * b = S(n) - a - b
    
    // and the sum of all first n natural numbers is
    // S(n) = n * (n + 1) / 2
    
    // so we can refrase the first formula like this:
    // a * b = n * (n + 1) / 2 - a - b
    // a * b + b = n * (n + 1) / 2 - a
    // b * (a + 1) = n * (n + 1) / 2 - a
    // b = (n * (n + 1) / 2 - a) / (a + 1)
    
    // but a and b are natural and up to n
    
    var results = [];
    for (var a = 1; a <= n; a++) {
      var b = (n * (n + 1) / 2 - a) / (a + 1);
      if (b % 1 === 0 && b <= n) results.push([a, b]);
    }
    return results;
  }