// In this kata, we're going to help Vicky keep track of the words she's learning.
// Write a function, learnWord(word) ( LearnWord(word) in C# ) which is a method of the Robot object. The function should report back whether the word is now stored, or if she already knew the word.

// Example:
// var vicky = new Robot();
// vicky.learnWord('hello') -> 'Thank you for teaching me hello'
// vicky.learnWord('abc') -> 'Thank you for teaching me abc'
// vicky.learnWord('hello') -> 'I already know the word hello'
// vicky.learnWord('wow!') -> 'I do not understand the input'
// Case shouldn't matter. Only alpha characters are valid. There's also a little trick here. Enjoy!


function Robot() { // very easy, except for the stupid catch that the robot already knows the words in the canned responses... had to include those
    this.known = 'thank you for teaching me i already know the word i do not understand the input'.split(' ')
  }
Robot.prototype.learnWord = function(word) {
    if (word.match(/[^a-zA-Z]/gm) || word.length==0) return 'I do not understand the input'
    if (this.known.includes(word.toLowerCase())) { // could be ? :
      return `I already know the word ${word}`
    } else {
      this.known.push(word.toLowerCase())
      return `Thank you for teaching me ${word}`
    }
  }