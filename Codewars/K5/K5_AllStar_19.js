// You work for an ad agency and your boss, Bob, loves a catchy slogan. He's always jumbling together "buzz" words until he gets one he likes. You're looking to impress Boss Bob with a function that can do his job for him.
// Create a function called sloganMaker() that accepts an array of string "buzz" words. The function returns an array of all possible UNIQUE string permutations of the buzz words (concatonated and separated by spaces).
// Your boss is not very bright, so anticipate him using the same "buzz" word more than once, by accident. The function should ignore these duplicate string inputs.

// sloganMaker(["super", "hot", "guacamole"]);
// //[ 'super hot guacamole',
// //  'super guacamole hot',
// //  'hot super guacamole',
// //  'hot guacamole super',
// //  'guacamole super hot',
// //  'guacamole hot super' ]
// sloganMaker(["cool", "pizza", "cool"]); // => [ 'cool pizza', 'pizza cool' ]

// Note:
// There should be NO duplicate strings in the output array
// The input array MAY contain duplicate strings, which should STILL result in an output array with all unique strings
// An empty string is valid input
// The order of the permutations in the output array does not matter


var sloganMaker = function(array){ // pain in the ass problem, but VERY GOOD TO LEARN, essentially Hemp's Algorithm to get all permutations of an array, a bit complicated...
    if(!array.length) { return [] }
    let res = [], unique = [...new Set(array)]
    
    const swap = (arr, i1, i2) => {
      const temp = arr[i1]
      arr[i1] = arr[i2]
      arr[i2] = temp
    }
    
    const generate = (n, heapArr) => {
      if(n===1) {
        res.push(heapArr.slice())
        return
      }
      generate(n-1, heapArr)
      for(let i=0; i<n-1; i++) {
        if(n%2==0) {
          swap(heapArr, i, n-1)
        } else {
          swap(heapArr, 0, n-1)
        }
        generate(n-1, heapArr)
      }
    }
    
    generate(unique.length, unique)
  
    return res.map(e=>e.join(' '))
  }

// or...

function *permute(a, n = a.length) { // ... the fuck?!, so this is my 'generate' function...
    if (n <= 1) yield a.slice();
    else for (let i = 0; i < n; i++) { // why i<n instead of i<n-1 ??? is this just a simple adjustment since no first recursive call???
      yield *permute(a, n - 1);
      const j = n % 2 ? 0 : i;
      [a[n-1], a[j]] = [a[j], a[n-1]]; // basically the swap fn in 1-line.. ive done this b4, shouldve known
    }
  }
var sloganMaker = function(array){
    let arr = Array.from(new Set(array))
    let newArr = Array.from(permute(arr)).map(perm => perm.join(' '))
    return newArr
  }