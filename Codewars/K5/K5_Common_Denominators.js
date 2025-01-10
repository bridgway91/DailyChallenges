// You will have a list of rationals in the form
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// where all numbers are positive ints. You have to produce a result in the form:
// "(N_1, D) ... (N_n, D)"
// in which D is as small as possible and
// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` "(6,12)(4,12)(3,12)"

function convertFrac(lst){ // instructions were kinda shit, but managed to figure it out, simple
    const den = lst.map(e=>e[1]).sort((a,b)=>b-a)
    let d = den[0]
    while(!den.every(e=>d%e == 0)) {d++}
  
    const n = lst.map(e=>[d/e[1]*e[0],d]).reduce((acc,cur)=>acc+`(${cur[0]},${cur[1]})`,'')
    return n
  }

// or

// very different method, and only somewhat understand it
const gcd = (a, b) => b ? gcd(b, a % b) : a; // greatest common denominator
const lcm = (a, b) => a * b / gcd(a, b); // lowest common multiplier?
function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1); // same as my 'd'
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}