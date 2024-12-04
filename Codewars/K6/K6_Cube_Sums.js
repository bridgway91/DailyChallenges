// Create a function "hasTwoCubeSums(n)"
// which checks if a given number n can be written as the sum of two cubes in two different ways: n = a³+b³ = c³+d³. All the numbers a, b, c and d should be different and greater than 0.

// E.g. 1729 = 9³+10³ = 1³+12³.
// hasTwoCubeSums(1729); // true
// hasTwoCubeSums(42);   // false


function hasTwoCubeSums(n) { // pretty easy, biggest key i feel to keep processing time down is knowing to keep upper limit to the cube of n, rather than going all the way to n
    const lim = Math.pow(n, 1/3)
    let sums = []
    for (let i=1; i<=lim; i++) {
      for (let j=i; j<=lim; j++) {
        if (Math.pow(i,3)+Math.pow(j,3) == n) { // couldve just had a counter here, and then when reaching 2 returning true... no need to get all possible combos
          sums.push([i,j])
        }
      }
    }
    return sums.length > 1
  }