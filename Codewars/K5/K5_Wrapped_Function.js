// Create a function method that allow you to wrap an existing function. The method signature would look something like this:

// Usage Example:
// function speak(name){
//    return "Hello " + name;
// }
// speak = speak.wrap(function(original, yourName, myName){
//    greeting = original(yourName);
//    return greeting + ", my name is " + myName;
// })
// var greeting = speak("Mary", "Kate");


Function.prototype.wrap = function (f) { // so i got this first line, and then was so confused by the prompt i didnt know how to proceed... ive done similar problems to this b4 and completed them, but this one was just worded badly imo... (NOT MY SOLN)
    return (...args) => f(this, ...args)
  };