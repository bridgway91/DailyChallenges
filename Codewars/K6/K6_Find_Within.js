// We'll create a function that takes in two parameters:
// - a sequence (length and types of items are irrelevant)
// - a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.

// Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.
// If the function given returns false for all members of the sequence, your function should return -1.

// var trueIfEven = function(value, index) { return (value % 2 === 0) };
// findInArray([1,3,5,6,7], trueIfEven) // should === 3


var findInArray = function(array, iterator) {
    let ind = -1, i = 0
    for (let e of array) {
      if (iterator(e,i)) {
        ind = i
        break
      }
      i++
    }
    return ind
  };


// alternatively...


var findInArray = function(array, iterator) { // really smart soln, never would have thought to use a function within a map method, though I guess that is technically what you always do... im dumb ... NOTE: this is not best soln if performance matters, since if first array val gives true, it will still go through applying the function to the rest of the array, regardless of how big it is
    return array.map(iterator).indexOf(true);
  };