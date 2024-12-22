// Your task is to program a function which converts any input to an integer.
// Do not perform rounding, the fractional part should simply be discarded.
// If converting the input to an integer does not make sense (with an object, for instance), the function should return 0 (zero).
// Also, Math.floor(), parseInt() and parseFloat() are disabled for your unconvenience.


function toInteger(n) { // annoying prob, but learning the '|0' trick helped a lot.. from there was just trial and error with adding exceptions
    let t = typeof n
    console.log(n, t)
    switch (t) {
        case 'number':
          return n|0
        case 'string':
          return n|0
        case 'boolean':
          return n ? 1 : 0
        case 'object':
          return (Array.isArray(n) && n.length==1) ? n[0] : 0
        default:
          return 0
    }
  }

// or

function toInteger(n) { // wait... JUST THAT WORKS?!?!?!
    return 0|n;
  }