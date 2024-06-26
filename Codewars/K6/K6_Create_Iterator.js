// Implement an iterator which receives an array of values, and returns an object with:
// - a function next
// - a number index

// A call to the next function should return an object with 2 attributes:
// - value (the next value in the input array; undefined if the value is not present or the array has been fully processed)
// - done (boolean which specifies whether the input array has been fully processed)

// Accessing the index attribute should return the index of the value currently held by the iterator.

const createIterator = (array) => { // thought this was going to be simple going into it, but constantly had issues, nothing i tried worked, had to look at solns and even my adjustments to them to try and make more sense of the problem didnt work out... dont know why using "this" doesnt work, tried to create "value" and "done" variables before the return and that didnt work... frustrating
    const iterator = {
      index: 0,
      next() {
        if (iterator.index < array.length) {
          return {value: array[iterator.index++], done: false}
        } else {
          return {value: array[iterator.index],done: true}
        }
      }
    }
    return iterator
  };