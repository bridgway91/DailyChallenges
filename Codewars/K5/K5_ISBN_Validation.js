// ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.
// An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

// For example:
// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10
// This is a valid ISBN, because:
// (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

// Examples
// 1112223339   -->  true
// 111222333    -->  false
// 1112223339X  -->  false
// 1234554321   -->  true
// 1234512345   -->  false
// 048665088X   -->  true
// X123456788   -->  false


function validISBN10(isbn) { // feel like there's probably a slimmer way to solve, but it'd be convoluted... this is the way my brain solves it...
  if (typeof isbn !== 'string' || isbn.length !== 10) return false;

  const chars = isbn.split('');

  const sum = chars.reduce((total, char, idx) => {
    if (idx === 9 && char === 'X') return total + 10 * (idx + 1);
    if (!/^\d$/.test(char)) return NaN; // early bail-out if not a digit
    return total + Number(char) * (idx + 1);
  }, 0);

  return sum % 11 === 0;
}