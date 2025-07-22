// In this kata your task is to create bit calculator. Function arguments are two bit representation of numbers ("101","1","10"...), and you must return their sum in decimal representation.

// Test.expect(calculate("10","10") == 4);
// Test.expect(calculate("10","0") == 2);
// Test.expect(calculate("101","10") == 7);

// parseInt and some Math functions are disabled.
// Those Math functions are enabled: pow,round,random


function calculate(a, b) { // omg simple
  const binToDec = str =>
    str
      .split('')
      .reverse()
      .reduce((sum, bit, i) => sum + (bit === '1' ? Math.pow(2, i) : 0), 0);

  return binToDec(a) + binToDec(b);
}