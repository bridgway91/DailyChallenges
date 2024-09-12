// Consider the function
// f: x -> sqrt(1 + x) - 1 at x = 1e-15.
// We get: f(x) = 4.44089209850062616e-16
// or something around that, depending on the language.

// This function involves the subtraction of a pair of similar numbers when x is near 0 and the results are significantly erroneous in this region. Using pow instead of sqrt doesn't give better results.
// A "good" answer is 4.99999999999999875... * 1e-16.
// Can you modify f(x) to give a good approximation of f(x) in the neighborhood of 0?

// Note:
// Don't round or truncate your results. See the testing function in Sample Tests:.


function f(x) { // this gave me so many problems... originally tried multiplying out the sqrt part then dividing later, but that didnt help at all, then looked at discussions and expansion series were mentioned so i looked some of those up, and trying to fully write out a loop for it was super annoying and wasnt even getting me readable answers (always NaN for some reason)... eventually looked at solutions and everyone was just using the first couple terms of the expansion and leaving it at that... so i guess that's fine
    let res = x/2
    res -= Math.pow(x,2) / 8
    res += Math.pow(x,3) / 16
    return res
  }
  