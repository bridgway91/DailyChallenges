// Given
// a semi-inclusive interval I = [l, u) (l is in interval I but u is not) l and u being floating numbers (0 <= l < u),
// an integer n (n > 0)
// a function f: x (float number) -> f(x) (float number)

// we want to return as a list the n values:
// f(l), f(l + 1 * d), ..., f(u -d) where d = (u - l) / n

// Call this function interp:
// interp(f, l, u, n) -> [f(l), f(l + 1 * d), ..., f(u - d)]
// The n resulting values f(l), f(l + 1 * d), ..., f(u - d) will be floored to two decimals.
// For that you can use: floor(y * 100.0) / 100.0.

// Examples:
// interp(x -> x, 0.0, 0.9, 3) -> [0.0; 0.3; 0.6]
// interp(x -> x, 0.0, 0.9, 4) -> [0.0; 0.22; 0.45; 0.67]
// interp(x -> x, 0.0, 1.0, 4) -> [0.0; 0.25; 0.5; 0.75]
// interp(x -> sin x, 0.0, 0.9, 3)  -> [0.0; 0.29; 0.56]


function interp(f, l, u, n) { // this problem... was so fking annoying... b/c my phone calc and javascript use sin() DIFFERENTLY...... phone assumes degrees and does the math with what it's given... javascript will take the number, assume its degrees, then times (180 / pi) to convert to radians, THEN DO THE FUNCTION.... WTF
    const d = (u-l)/n
    let res = []
    for (let i=0; i<n; i++) {
      res.push(Math.floor(f(l+i*d)*100)/100)
    }
    return res
  }