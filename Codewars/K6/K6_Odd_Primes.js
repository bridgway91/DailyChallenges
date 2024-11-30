// Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

// Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:
// [number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]

// Let's see some cases:
// only_oddDigPrimes(20) ----> [7, 19, 31]
// ///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
// 19, because is the nearest prime of this type to 20
// 31, is the first pure odd digit that we encounter after 20///
// only_oddDigPrimes(40) ----> [9, 37, 53]

// In the case that n, the given value, is a pure odd prime, should be counted with the found primes and search for the immediately below and the immediately after.
    // (^ no idea what this means, cuz above it specifies nums being smaller/higher than n)



function onlyOddDigPrimes(n) { // hardest part was just trying a bunch of diff .includes() methods b4 switching over to .search() ... also prime check fn was fked at start, which is embarassing considering how often ive had to code it
    let oddPrimes = []
    for (let i=3; i<n; i+=2) {
        if(`${i}`.search(/0|2|4|6|8/g) < 0 && isPrime(i)) oddPrimes.push(i)
    }
    
    let next
    for (let i=n+1; ; i++) {
        if (`${i}`.search(/0|2|4|6|8/g) < 0 && isPrime(i)) {
        next = i
        break
        }
    }
    return [oddPrimes.length, oddPrimes[oddPrimes.length-1], next]
    }
function isPrime(num) {
    for (let i=3; i<num; i+=2) { // oh yeah, could probly be i <= Math.sqrt(num)
        if (num%i == 0) return false
    }
    return Number.isInteger(num) && num>1
    }