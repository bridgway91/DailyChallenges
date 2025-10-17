// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:
// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016
// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Examples
// 16+18=214, 26+39=515, 122+81=1103, 72+9=711...


function add(a, b) { // used cgpt, didnt feel like writing it all out, not hard, just being lazy
  if (a === 0 && b === 0) return 0;
  let res = '';
  while (a > 0 || b > 0) {
    res = ((a % 10) + (b % 10)) + res;
    a = (a / 10) | 0;
    b = (b / 10) | 0;
  }
  return +res;
}
