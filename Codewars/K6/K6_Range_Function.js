// Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

// Examples:

// range(5) --> 1,2,3,4,5
// range(3, 7) --> 3,4,5,6,7
// range(2, 3, 15) --> 2,5,8,11,14


function range(...args) { // i actually remember encountering this challenge before, and skipping it b/c the arguments changing their meaning based on how many were included was such a headache (and still think its stupid), and it seemed not impossible, but outside my ability at the time... but getting to it now and its really easy, if a bit annoying
    let start=1, step=1, stop, res=[]
  
    if(args.length == 1) {
      stop = args[0]
    }
    if(args.length == 2) {
      start = args[0]
      stop = args[1]
    }
    if(args.length == 3) {
      start = args[0]
      step = args[1]
      stop = args[2]
    }
  
    for (let i=start; i<=stop; i=i+step) {
      res.push(i)
    }
    return res
  }

// alternatively...

function range(min, step, max) { // interesting method... always forget that 'arguments' is an actual parameter of a function that can be utilized
    if (arguments.length === 1) return range(1, 1, min)
    if (arguments.length === 2) return range(min, 1, step)
    const result = []
    for (let i = min; i <= max; i += step) {
      result.push(i)
    }
    return result
  }