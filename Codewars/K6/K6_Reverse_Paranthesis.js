// Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

// For example:
// solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
// solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
// solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.

// Parenthesis will be either "(" or ")".
// More examples in the test cases.
// Good luck.


function solve(s){ // seemed easy at first, but problem wants a balanced set, not a perfect mirror set, which would be much easier... and could not figure out myself, so looked at solns and got basically this... i kinda get it, but still a little hard to wrap my head around it
    if(s.length%2) return -1
    let swaps = 0, bal = 0
    for (let p of s) {
      if (p == '(') { // incr balance count for open
        bal++
      } else {
        if (bal > 0) { // decr balance count for closed IF COUNTER IS POS
          bal--
        } else { // counter is <=0 -> swap closed to open, incr both counters
          bal++
          swaps++
        }
      }
    }
    return swaps + (bal/2) // after all "fix" swaps, can add balance / 2 for '()(('-type situations
  }