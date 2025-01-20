// In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.
// In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:
// x2 - 4 * y2 = n
// (where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

// If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

// Examples:
// solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
// solEquaStr(90002) --> "[]"

// Hint:
// x2 - 4 * y2 = (x - 2*y) * (x + 2*y)


function solequa(n) { // ANOTHER FAILURE, conceptually simple, but numbers too big!
    console.log(n)
    let res = []
    for(let x = n; x*x>=n; x--) {
      let y = Math.sqrt((x*x - n) / 4)
      if(Number.isInteger(y)) res.push([x,y])
    }
    console.log(res)
    return res
  }

// ok, bunch of other solutions but none are explained, so even if i put something here im not gonna understand it


function solequa(n) { // clearest i found, combined with some notes from *another* soln
    let upper_bound = Math.sqrt(n);
    let result = []
    for (let a  = 0; a <= upper_bound; a++) { // so a = x-2y, then b = x+2y, and a*b=n, but we go via just counting a's, also.. since b always >= a, at highest a it's == sqrt(n), so can set that as upper bound
       let b = n / a;
       if (Number.isInteger(b)) { // see below, where a=d1, b=d2
           let x = (a + b) / 2;
           let y = (b - a) / 4;
           if (Number.isInteger(x) && Number.isInteger(y)) {
            result.push([x, y]);
           }
       }    
    }
  
      return result;
  }
  // x^2 - 4y^2 = n
  // (x - 2y)(x + 2y) = n;
  // x - 2y = d1
  // x + 2y = d2
  // 2x = d1 + d2
  // x = (d1 + d2) / 2
  // -4y = d1 - d2
  // y = (d2 - d1) / 4