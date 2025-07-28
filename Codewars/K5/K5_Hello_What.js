// In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

// Disallowed functionality:
// Strings
// Numbers
// Regular Expressions
// Functions named "Hello", "World", "HelloWorld" or anything similar.
// Object keys named "Hello", "World", "HelloWorld" or anything similar.
// Without using the above, output the string "Hello World!" to prove that there is always a way.


var helloWorld = function () { // fuck this problem!
  const f = ([]+[]).constructor.fromCharCode;

  const zero = +[];
  const one = +!![];
  const two = one + one;
  const three = two + one;
  const four = three + one;
  const five = four + one;
  const six = five + one;
  const seven = six + one;
  const eight = seven + one;
  const nine = eight + one;

  const ten = nine + one;
  const eleven = ten + one
  const twentyOne = ten + ten + one;
  const thirtyTwo = eight * four;
  const thirtyThree = thirtyTwo + one;
  const fortyFour = eleven + thirtyThree;
  const fiftyTwo = fortyFour + eight;
  const seventyTwo = eight * nine;
  const eightySeven = seventyTwo + ten + five;
  const oneHundredOne = seventyTwo + twentyOne + eight;
  const oneHundredEleven = oneHundredOne + ten;

  return f(
    seventyTwo,         // H
    oneHundredOne,      // e
    oneHundredOne + seven, // l
    oneHundredOne + seven,    // l
    oneHundredEleven,   // o
    thirtyTwo,          // space
    eightySeven,        // W
    oneHundredEleven,   // o
    oneHundredEleven + three, // r
    oneHundredOne + seven,    // l
    ten * ten, // d
    thirtyThree          // !
  );
};
