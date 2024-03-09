// Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

// Note: There will always be at least 1 string; all inputs will be non-empty.

// For example:

// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
// Tip (helpful, but not necessary): Try using classes!

// Good luck and happy coding!


function createMessage(str1) { // dont get it, asked Eoin
    return (str2) => {
      return str2 ? createMessage(`${str1} ${str2}`) : str1
    }
  }




/** Generate a space-separated message with the repeated function calls. Function call without an argument returns the resulting message */
const createMessage = (str) => { // basically same but different format, idk
    return function (nextStr) {
      if (!nextStr) return str;
      return createMessage(`${str} ${nextStr}`);
    };
  };