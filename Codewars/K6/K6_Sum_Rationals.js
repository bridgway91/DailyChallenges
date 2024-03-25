// You will have a list of rationals in the form

// lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
// or
// lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]

// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.

// Return the result in the form: [N, D]
// If the result is an integer (D evenly divides N) return: an integer
// If the input list is empty, return null

// Example:
// [ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]
// 1/2  +  1/3  +  1/4     =      13/12


function sumFracts(l) { // reducing a fraction in code is a lot harder than i expected
    if (l.length === 0) return null
    let bot = l.reduce((acc,cur)=>acc*cur[1],1)
    let top = l.reduce((acc,cur)=>acc + (bot/cur[1]) * cur[0],0)
    let a = top, b = bot, c
    while (b) {
      c = a % b
      a = b
      b = c
    }
    top = top / a, bot = bot / a
    return bot > 1 ? [top, bot] : top
  }


// nothing to really learn from others