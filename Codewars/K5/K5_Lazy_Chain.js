// Method chaining is a useful technique in JavaScript, allowing better composability and readability of functions.

// One problem with standard JavaScript chaining is that chained methods are immediately executed upon creation.
//   let a = [ 1, 2, 3].map(x => x * 2).reverse();
//   // a = [ 6, 4, 2]
// The problem with this is that it opens values up to possible mutation before being called.
//   a.join("");
//   // a = "642"
//   function doSomething(array) {
//     // Does something to an array
//   }
//   doSomething(a); // TypeError - a is not an array  

// To combat this we can create a function lazyChain that accepts an argument and allows chaining, but delays execution to when the value method is called.
//   let a = lazyChain([1,2,3])
//                             .invoke('map', x => x * 2)
//                             .invoke('reverse');
//   console.log(a.value());
//   // [ 6, 4, 2]         
//   a.join("");
//   // TypeError
//   doSomething(a.value());
//   // valid function call

// Your task is to create the function lazyChain which accepts any value, and allows method chaining through the use of invoke, and execution with the value method.
// Keep in mind that invoke is general enough to accept any prototype methods from the standard language.


function lazyChain(arg) { // was kinda hard to understand what i needed to do, realized I wanted to return an object, had some trouble setting that up, got caught up on the fact that the second arg for .invoke() could be a function body OR just arguments, so CGPT helped figure out how to handle that, basically doing something similar to instead of map(acc), which naturally doesnt work, had to shift to acc.map(), but since the "map" is a string, the syntax being used is similar to acc[map], which works!
    return {
      start: arg,
      chains: [],
      invoke(fnName, ...args) {
        this.chains.push([fnName,args])
        return this
      },
      value() {
        return this.chains.reduce((acc,cur)=>acc[cur[0]](...cur[1]),this.start)
      }
    };
  }