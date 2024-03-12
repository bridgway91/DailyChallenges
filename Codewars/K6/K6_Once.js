// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

// Subsequent calls to the resulting function should have no effect (and should return undefined).

// For example:

// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect


function once(fn) {
    let hasBeenCalled = false
    let result
    return function (...args) {
      if (!hasBeenCalled) {
        hasBeenCalled = true
        result = fn.apply(this,args)
      } else {
        result = undefined
      }
      return result
    }
  }


// alternatively...


function once(fn) {
	var call = true
	return function() {
    if (call) {
    	call = false
    	return fn.apply(this, arguments)
  	}
	}
}


/**
 * Returns a new function based on original, but can only be called once.
 *  Subsequent calls will simply return undefined.
 *
 * @param {function} Original function
 * @return {function} New "once" function
 */
function once(fn) {
    'use strict';

    return function () {
        if (!fn.ranOnce) {
            fn.ranOnce = true;
            return fn.apply(fn, arguments);
        }
    };
}


function once(fn) {
    let isCall = false;
    
    return (...arg) => {
      if (!isCall) {
        isCall = true;
        return fn(...arg);
      }
    }
  }