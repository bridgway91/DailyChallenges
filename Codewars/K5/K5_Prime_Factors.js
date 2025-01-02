// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


function primeFactors(n){ // easy due to remembering that first while loop trick from another problem, gets all the prime factors of a num!
    let factors = {}, f=2
    while(n>1) {
      if(n%f == 0) {
        factors[f] = factors[f] ? factors[f]+1 : 1
        n = n/f
      } else {
        f++
      }
    }
  
    let res = ''
    for(let k of Object.keys(factors)) {
      res += factors[k]>1 ? `(${k}**${factors[k]})` : `(${k})`
    }
    return res
  }


// or


function primeFactors(n){ // basically a slimmed down version of mine, built the res and counted along the way of getting the factors
    for (var i=2, res="", f; i <= n; i++) {
      f=0;
      while (n%i == 0) { f++; n/=i }
      res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
    }
    return res || "("+n+")"
  }