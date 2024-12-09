// This kata asks you to make a custom esolang interpreter for the language MiniBitMove. MiniBitMove has only two commands and operates on a array of bits. It works like this:

// 1: Flip the bit at the current cell
// 0: Move selector by 1
// It takes two inputs, the program and the bits in needs to operate on. The program returns the modified bits. The program stops when selector reaches the end of the array. Otherwise the program repeats itself. Note: This means that if a program does not have any zeros it is an infinite loop

// Example of a program that flips all bits in an array:

// Code: 10
// Bits: 11001001001010
// Result: 00110110110101
// After you're done, feel free to make translations and discuss this kata.


function interpreter(tape, array) { // problem was very annoying cuz i did almost exactly this at first and it wasnt working... no clue why, it was a for loop inside the while loop to essentially loop through the 'j' part (the tape), but had to look at solns to get this, which again is nearly the same as my original.... to be fair my soln nearly got there, and worked for the basic tests, but added a lot to the end of the result for some random tests, not sure why
    let i = 0, j = 0
    let a = [...array]
    while (i < a.length) {
      if(tape[j] == '1') {
        a[i] = a[i]=='1' ? '0' : '1'
      } else {
        i++
      }
      j++
      if(j==tape.length) j=0
    }
    return a.join('')
  }