// Write function combine()
// that combines arrays by alternatingly taking elements passed to it.

// E.g
// combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
// combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
// combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]

// Arrays can have different lengths.


function combine(...args) { // gave me a bit of a headache, but mostly around syntax issues, original plan to solve it still mostly worked
    let res = [], total = args.reduce((a,c)=>a + c.length,0)
    
    for (let i=0; res.length<total; i++) {
      if(i==args.length) i=0
      if(args[i].length == 0) continue
      res.push(args[i].shift())
    }
    
    return res
  }