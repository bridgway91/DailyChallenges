// Imagine JavaScript didn't natively include the call function. The apply function however still exists.

// Using apply, write call.

// Note: console.log internally uses the 'call' function, which therefore means you can't debug using console.log as it will either call an empty function or cause an infinite loop.


Function.prototype.call = function(thisArg, ...args) { // did attempt it, but felt so unsure of it i didnt even test it b4 immediately going to other solns... this is just something i dont feel super comfortable with yet
    return this.apply(thisArg, args)
  }