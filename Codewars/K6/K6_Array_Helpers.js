// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]


Object.assign(Array.prototype, { // really wasnt sure where to start with this, tried just doing 'array.xxx() = ...' but that didnt work, tried letting a new class extend off base Array, but that didnt work... eventually looked at solutions and found this way to start (the methods below were of no challenge)...
// regardless, NEVER DO THIS, APPARENTLY IT CAN FUCK THINGS UP
    square() {
      return this.map(el=>Math.pow(el,2))
    },
    cube() {
      return this.map(el=>el*el*el)
    },
    average() {
      return this.sum() / this.length
    },
    sum() {
      return this.reduce((acc,cur)=>acc+cur,0)
    },
    even() {
      return this.filter(el=>el%2==0)
    },
    odd() {
      return this.filter(el=>el%2!=0)
    }
  })

// alternatively...

Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }