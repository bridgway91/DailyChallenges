// Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating a function on each element.
// The method should return an object, in which for each different value returned by the function there is a property whose value is the array of elements that return the same value.
// If no function is passed, the element itself should be taken.

// Example:
// [1,2,3,2,4,1,5,1,6].groupBy()
// {
//   1: [1, 1, 1],
//   2: [2, 2],
//   3: [3],
//   4: [4],
//   5: [5],
//   6: [6]
// }
// [1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }

// For more examples have a look at the example test cases


Array.prototype.groupBy = function(fn) { // seemed confusing on first read, but managed to get it done rather quickly.. only hiccup was checking for if a function was included in the res assignment
    let group = {}
    for (let e of this) {
      let res = fn ? fn(e) : e
      if(group[res]) {
        group[res].push(e)
      } else {
        group[res] = [e]
      }
    }
  
    return group
  }

// alternatively...

Array.prototype.groupBy = function(fn) { // creates a fn if none was included, then just does a reduce on 'this' combining everything into an object, neat
    if (fn == null) fn = function(x) { return x }
    return this.reduce(function(groups, val) {
      var key = fn(val)
      groups[key] ? groups[key].push(val) : groups[key] = [val]
      return groups
    }, {})
  }