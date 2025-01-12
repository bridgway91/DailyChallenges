// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:
// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments


function cache(func) { // nearly a copy+paste of another solution, cuz while i did realize the basic idea behind how it needed to be solved (use an object to hold arguments + results as keys+values), i had no fking clue how to implement it in this situation... even with knowing the basic answer structure, i tried to write my own and it kept fking up until it became a near-copy (just variable names adjusted mainly)
    let c = {}
    return function() {
      const k = JSON.stringify(arguments)
      if(!(k in c)) { // tried !c[k], didnt work
        c[k] = func.apply(null, arguments) // tried c[k] = func(arguments), didnt work
      }
      return c[k]
    }
  }