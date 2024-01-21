// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

function deepCount(a){
    let count = 0
    let temp = a
    while (temp.length > 0) {
      count += temp.length
      temp = temp.filter(el=> Array.isArray(el)).flat()
    }
    return count
  }

// alternatively...

function deepCount(arr) { // interesting one that counts one-by-one and when finds an array, adds the contents to the end of the array
    const stack = [...arr]
    let size = 0 
    while (stack.length) {
      const next = stack.pop()
      size += 1
      if (Array.isArray(next)) {
        stack.push(...next)
      }
    }
    return size
  }


// rest of solutions found were pretty much all recursive (weird how one time it seems best used, i dont think to try a recursive approach)

function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
  }
  // ~=~
function deepCount(array) {
    var count = array.length
    for (const element of array) {
      if (Array.isArray(element)) {
        count += deepCount(element)
      }
    }
    return count
  }