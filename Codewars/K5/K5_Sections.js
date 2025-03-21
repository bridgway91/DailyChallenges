// Consider the following equation of a surface S: z*z*z = x*x * y*y.
// Take a cross section of S by a plane P: z = k where k is a positive integer (k > 0).
// Call this cross section C(k). // so k^3 = x^2 * y^2 = (xy)^2 --> xy = k^(3/2) = k * k^(1/2), so if x&y are Ints, sqrt(k) must also be Int

// Task
// Find the number of points of C(k) whose coordinates are positive integers.

// Examples
// If we call c(k) the function which returns this number we have
// c(1) -> 1
// c(4) -> 4
// c(4096576) -> 160
// c(2019) -> 0 which means that no point of C(2019) has integer coordinates.

// Notes
// k can go up to about 10,000,000,000


function c(k) { // knew from the start that simple math wouldnt work, and couldnt think of a way to solve on my own, so again resorted to chatGPT, which i told to put comments in to explain each step
    // Step 1: Check if k is a perfect square. // perfect square = square root is an integer
    // Only perfect squares have valid integer solutions because k^(3/2) must be an integer.
    const s = Math.floor(Math.sqrt(k));
    if (s * s !== k) {
      return 0; // If k is not a perfect square, return 0 (no valid (x, y) pairs).
    }
  
    // Step 2: Perform prime factorization of s.
    // This will help us efficiently determine the number of divisors of s^3.
    let temp = s;
    const primeFactors = {};
  
    // Try dividing temp by all numbers from 2 up to √temp to find prime factors.
    let factor = 2;
    while (factor * factor <= temp) {
      // If factor divides temp, it's a prime factor.
      while (temp % factor === 0) {
        primeFactors[factor] = (primeFactors[factor] || 0) + 1; // Track exponent of this prime.
        temp /= factor; // Divide out the prime factor completely.
      }
      factor++; // Check the next possible factor.
    }
  
    // If temp is greater than 1, it must be a prime number.
    // This handles the case where temp itself is a prime or has one large prime factor.
    if (temp > 1) {
      primeFactors[temp] = (primeFactors[temp] || 0) + 1;
    }
  
    // Step 3: Calculate the number of divisors of s^3 using its prime factorization.
    // For a number n = p1^e1 * p2^e2 * ..., the number of divisors is (e1 + 1) * (e2 + 1) * ...
    // For s^3, the exponents are multiplied by 3, so we use (3 * exponent + 1).
    let count = 1;
    for (const exp of Object.values(primeFactors)) {
      count *= (3 * exp + 1); // Multiply by (3a_i + 1) for each prime factor.
    }
  
    return count; // Return the total number of valid (x, y) pairs.
  }
  // tbh i still dont really understand it...