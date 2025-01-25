// In JavaScript, perhaps no operator is as complicated as new. "Wait; new is an operator?" Yep; an operator is something that operates on one or more operands and evaluates to a result. Binary operators like + and !== operate on two operands:
// 5 + 5 evaluates to 10
// {} !== [] evaluates to true
// Whereas unary operators like + and typeof take one operand (hmm, + is both a unary and binary operator, how 'bout that!):
// +'5' evaluates to 5
// typeof '5' evaluates to 'string'
// Ultimately operators are functions with different syntax. They take inputs/operands and return/evaluate to something. In fact, some JS operators can be re-written as functions.


// So what about new? Well, the unary operator new is intended to create "instances" of a constructor function. To be more precise, the operation new Constructor(arg1, arg2, ...argX) does the following:
// 1 - Creates an empty object (which we'll call instance) which prototypally inherits from Constructor.prototype
// 2 - Binds Constructor to instance (meaning this is instance) and invokes Constructor with any arguments passed in
// 3 - If the return value of Constructor is an object (including arrays, functions, dates, regexes, etc.) the operation evaluates to that object
// 4 - Otherwise, the operation evaluates to instance

// Let's see some examples:

// function Person (name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.introduce = function(){
//   return 'My name is ' + this.name + ' and I am ' + this.age;
// };
// var john = new Person('John', 30);
// var jack = new Person('Jack', 40);
// console.log( john.introduce() ); // My name is John and I am 30
// console.log( jack.introduce() ); // My name is Jack and I am 40
// function ReturnsArray (name) {
//   this.name = name;
//   return [1, 2, 3];
// }
// var arr = new ReturnsArray('arr?');
// console.log( arr.name ); // undefined
// console.log( arr ); // [1, 2, 3]

// Oof! No wonder people get confused about new. The good news is… everything new can do, you can do too.

// Exercise
// Your mission: write a function nouveau (that's French for "new") which takes one function parameter (the constructor), plus an unknown number of additional parameters of any type (arguments for the constructor). When invoked, nouveau should do everything new does and return the same object new would evaluate to, as specified above.
// var john = nouveau(Person, 'John', 30); // same result as above
// Good luck!


function nouveau (Constructor) { // honestly surprised i managed this one... took some trial-n-error, but eventually got it... little proud of myself for this one
    // Don't forget, unnamed arguments after Constructor may be passed in!
    const params = [...arguments].slice(1)
    let instance = Object.create(Constructor.prototype)
    const boundCon = Constructor.bind(instance).apply(instance, params)
  
    return ((typeof boundCon === 'object' && boundCon !== null) || typeof boundCon === 'function') ? boundCon : instance
  }

// or

function nouveau (Constructor, ...args) { // ok, what to learn... first, probly couldve added in args to mine, wouldnt have needed 'params', happy that it also uses Object.create(...), also makes me realize i didnt need bind() if im already doing apply() on the same 'this'... the return line is also interesting, wouldnt have thought of it, guess similar to String() or Number() you can do Object(), then just compare to result
    const instance = Object.create(Constructor.prototype);
    const result = Constructor.apply(instance, args);
    return result === Object(result) ? result : instance;
  }