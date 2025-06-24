// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.
// In this system, the last digit is always 0 and is in base 0!. The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!, etc. More generally, the nth-to-last digit is always 0, 1, 2, ..., n and is in base n!.
// Read more about it at: http://en.wikipedia.org/wiki/Factorial_number_system

// Example
// The decimal number 463 is encoded as "341010", because:
// 463 = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!
// If we are limited to digits 0..9, the biggest number we can encode is 10!-1 (= 3628799). So we extend 0..9 with letters A..Z. With these 36 digits we can now encode numbers up to 36!-1 (= 3.72 × 1041)

// Task
// We will need two functions. The first one will receive a decimal number and return a string with the factorial representation.
// The second one will receive a string with a factorial representation and produce the decimal representation.
// Given numbers will always be positive.


function dec2FactString(nb) { // a little weird, but not too difficult
  let result = '';
  let i = 1;

  // Find the max factorial base needed
  while (factorial(i) <= nb) {
    i++;
  }

  // Build the factorial representation from largest base down to 0!
  for (let j = i - 1; j >= 0; j--) {
    const f = factorial(j);
    const digit = Math.floor(nb / f);
    nb %= f;
    result += digit < 10 ? digit : String.fromCharCode(55 + digit); // 10 -> 'A', 11 -> 'B', ...
  }

  return result;
}
function factString2Dec(str) {
  let result = 0;
  const len = str.length;

  for (let i = 0; i < len; i++) {
    const char = str[i];
    const digit = parseInt(char, 36); // handles '0'-'9' and 'A'-'Z'
    result += digit * factorial(len - 1 - i);
  }

  return result;
}
// Helper function for factorial
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}



// or...

function dec2FactString(n){ // da fuck?
	const d = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	let s = '0', i = 2;
	while (n){s = d[n%i] + s; n = Math.floor(n / i); i++}
	return s;
}
function factString2Dec(s){
	const d = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const l = s.length;
	return s.split('').reduce((a,e,i) => Number(a) * (l - i) + d.indexOf(e), 0);
}