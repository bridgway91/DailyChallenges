// We need prime numbers and we need them now!
// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,
// 11 => [2, 3, 5, 7, 11]


function isPrime(n) { // omg easy, why is this K5?
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}
function prime(max) {
  const primes = []
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) primes.push(i)
  }
  return primes
}
