// Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

// Example (input -> output):
// 'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'

// You can learn more about Base64 encoding and decoding here.
// Note: This kata uses the non-padding version ("=" is not added to the end).


//Extend the String object with toBase64() and fromBase64() functions
String.prototype.toBase64 = function() { // fuck this problem, this is not K5, its harder, and not even close to anything i already know or seem to need to know in the future... cgpt solved it, i learned nothing, and i dont care... moving on...
  return Buffer.from(this.toString()).toString('base64').replace(/=*$/, '');
};
String.prototype.fromBase64 = function() {
  let str = this.toString();
  while (str.length % 4) str += '='; // re-pad to proper length
  return Buffer.from(str, 'base64').toString();
};
