// Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

// For example:
// var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'

// If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
// The shift will always be in range of [1, 26].


class CaesarCipher { // how many times am i going to do the fking caesar cipher?!
  constructor(shift) {
    this.shift = shift % 26;
  }

  encode(str) {
    return str
      .toUpperCase()
      .split('')
      .map(char => this.shiftChar(char, this.shift))
      .join('');
  }

  decode(str) {
    return str
      .toUpperCase()
      .split('')
      .map(char => this.shiftChar(char, 26 - this.shift))
      .join('');
  }

  shiftChar(char, shift) {
    if (char < 'A' || char > 'Z') return char;
    return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
  }
}
