// Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well here, but this is my explanation, in simple mathematical notation:

// f3 = compose( f1 f2 )
//    Is equivalent to...
// f3(a) = f1( f2( a ) )
// Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!

// compose(f , g)(x)
// => f( g( x ) )
// This kata is not available in haskell; that would be too easy!


function compose(f,g) {
    // my thoughts after looking at answer first: so compose is supposed to output a function, not a value, hence the first return function... the function that returns is easily enough seen as f ( g (...) ), but just putting 'x' inside stops it from working in certain situations where there's more inputs, honestly not sure what other syntax you could use for such a situation
    return function(...x) {
      return f(g(...x))
    }
  }


// alternatively.... AKA the answer I first looked at to figure it out


//takes two functions f, g returns a function that takes an arbitrary
//number of arguments
const compose = (f,g) => (...val) => f(g(...val))

/* Here is non-arrow syntax of the compose function
function compose(f,g) {
    function fog(...val){
        return f(g(...val))
    }
    return fog
}
*/