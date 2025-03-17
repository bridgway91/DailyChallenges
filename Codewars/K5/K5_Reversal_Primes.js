// The number 1089 is the smallest one, non palindromic, that has the same prime factors that its reversal. Thus,
// prime factorization of 1089 with 3, 3, 11, 11 -------> 3, 11
// prime factorization of 9801 with  3, 3, 3, 3, 11, 11 -------> 3, 11

// The task for this kata is to create a function same_factRev(), that receives a nMax, to find all the numbers with the above property, bellow nMax.
// the function same_factRev(), will output a sorted list with the found numbers bellow nMax

// Let'se some cases
// same_factRev(1100) -----> [1089]
// same_factRev(2500) -----> [1089, 2178]
// (Palindromic numbers are like: 171, 454, 4224, these ones should be discarded)

// Happy coding!!


let samePrimes = [1089]
function sameFactRev(nMax) { // not too happy with this, barely made it through time-wise imo, think there has to be a faster way to handle this, or weed out unneeded checks
  const Rev = (n) => {
    return +String(n).split('').reverse().join('')
  }
  const getUniquePrimeFacts = (n) => {
    let pf = [], i = 2
    while(n>1) {
      if(n%i == 0) {
        pf.push(i)
        n /= i
      } else {
        i++
      }
    }
    return [...new Set(pf)]
  }
  
  for (let i=samePrimes[samePrimes.length-1]+1; i<=nMax; i++) {
    if(String(i)!=String(Rev(i))) {
      let pf1 = getUniquePrimeFacts(i)
      let pf2 = getUniquePrimeFacts(Rev(i))
      if(pf1.length==pf2.length && pf1.join('')==pf2.join('')) { samePrimes.push(i) }
    }
  }

  return samePrimes.filter(n=>n<=nMax)
}