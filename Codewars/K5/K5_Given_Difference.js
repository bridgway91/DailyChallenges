// You will be given an array of values.
// For simplicity sake you can assume that all the numbers will be non-negative integers.
// The goal is to create a class that handles finding all the values in the array that are within a given range of each other.
// Return the final values in ascending order.

// For Example
// Given
// [5, 32, 5, 1, 31, 70, 30, 8]
// and you want to know all the values that fall within a difference of 2 of each other:
// Should Return
// [5,5,30,31,32]

// If an empty array is given, then an empty array should be returned regardless of the value passed in.

// Example solution call...
// GroupByDifference.new([5, 32, 5, 1, 31, 70, 30, 8]).find(3) #=> [5,5,8,30,31,32]


class GroupByDifference {
    constructor(arr) {
      this.arr = arr
    }
    find(n) {
      let arrSort = this.arr.sort((a,b)=>a-b) // think this does do the sort, so the assignment is pointless
      let res = []
      this.arr.forEach((e,i)=>{
        let min = e-n, max = e+n
        if(this.arr[i-1]>=min || this.arr[i+1]<=max) { res.push(e) }
      })
      return res
    }
  }

// or

class GroupByDifference { // think this is just the same as mine but more straight-forward
    constructor(numbers) {
      this.numbers = numbers
    }
  
    find(range) {
      return this.numbers
        .slice()
        .sort( (a, b) => a - b)
        .filter( (n, i, a) =>  a[i+1] - n <= range || n - a[i-1] <= range)
    }
  }