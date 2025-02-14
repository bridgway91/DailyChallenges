// Functional programming thrives from the reuse of functions. One core feature to extend the reuse is the concatenation of functions.
// You probably know this feature from your favorite shell: ls -la | sort | head lists the top lines of the sorted result of ls -la

// Build a function pipe to achieve this with JS. An example use could be:
// var addOne = function(e) {
//     return e + 1;
// };
// var square = function(e) {
//     return e * e;
// };
// var result = [1,2,3,4,5].map(addOne.pipe(square)) //-> [4,9,16,25,36]

// Since a function only can return one value it is absolutely sufficient to only support functions that consume only one parameter. Build your pipe function in a way, that one can pipe an arbitrary number of functions.


// just a small amount of possible functions to start testing with.
var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};
// Extend the Function prototype with a method pipe
Function.prototype.pipe = function(...args) { // okay, so this problem seemed confusing from the start and i assumed id have to give up and get other answer, tried one or two things and it wasn't really getting anywhere, finally stared at it some more and decided to just try the whole 'reduce an array of functions' method ive seen and used before... and it worked first try! go me!
  let fns = args
  fns.unshift(this)
  return (e) => {
    return fns.reduce((a,c)=>c(a),e)
  }
}

// or...

Function.prototype.pipe = function(fun) { // ok, i clearly have more to learn and understand, this seems more 'high-lvl' compared to my method
    return function(param) {
      return fun(this(param));
    }.bind(this);
  };

// or...

Function.prototype.pipe = function(fn) {
    return (...args) => fn(this(...args))
  } // a comment explaining this soln a bit: In javascript this refers to the object you call a function on. But since a function is also an object in javascript you can do this(). Here this refers to the function you call pipe on, so you call the original function with the arguments and pass the result to the piped function as an argument so addOne.pipe(square)(1) is actually square(addOne(1)) where this refers to addOne