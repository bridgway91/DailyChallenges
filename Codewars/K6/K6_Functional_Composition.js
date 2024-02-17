// Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

// const addOne = (a) => a + 1
// const multTwo = (b) => b * 2
// const addOneMultTwo = (c) => multTwo(addOne(c))

// addOneMultTwo(5) // returns 12
// Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function which does the heavy lifting of combining functions for you. So you could implement addOneMultTwo as follows:

// const addOneMultTwo = compose(multTwo, addOne)

// addOneMultTwo(5) // returns 12
// A simple implementation of compose, could work as follows:

// const compose = (f, g) => (a) => f(g(a))
// The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.



function compose(...args) { // another case of a challenge that was completely alien to me and I needed to look up, but it does serve as an introduction to functional programming, which I would like to get into at some point
    return (input) => { // a reminder that i am returning a full-blown function, not just the value in args which happens to be a function
      return args.reduceRight((acc,fn) => {
        return fn(acc)
      }, input)
    }
  }


// alternatively...

function compose(...args) { // similar to an idea that was percolating in my head while attempting other methods, but couldnt nail down as to how to make work
    return function(n){
        var result=n;
        while(args.length!==0)
        {
            result = args.pop()(result);
        }
        return result;
    }
};


function compose(...funcs) {
    return function (num) {
      return funcs.reduceRight((acc, fn) => fn(acc), num);
    }
  }