// You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but this function will always be called in the specified context. The problem is that you can't rebind another context any more.

// var func = function () {
//   return this.prop;
// };
// var obj1 = {prop: 1},
//     obj2 = {prop: 2};
    
// func = func.bind(obj1);
// func(); // Will produce 1

// func = func.bind(obj2);
// func(); // Will also produce 1 :(

// Your task is override the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times. In this kata you don't need to worry about currying, testing function will never get params.


Function.prototype.bind = function (ctx) { // still dont really understand this, but the problem did make me go look up call(), apply(), and bind(), so that's something
    let func = this
    return function(...args){
      return func.call(this == global ? ctx : this, ...args)
    }
  };


// alternatively...

Function.prototype.bind = function (rootContext) {
    return (childContext = rootContext) => this.call(childContext, childContext);
  };


Function.prototype.bind = function(ctx) {
    const fn = this;
    return function() {
        return fn.apply(this === global ? ctx : this);
    } 
}