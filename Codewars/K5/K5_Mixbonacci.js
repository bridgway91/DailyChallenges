// Mix -nacci sequences using a given pattern p.
// Return the first n elements of the mixed sequence.

// Rules
// The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping below (e. g. ['fib', 'pad', 'pel'] means take the next fibonacci, then the next padovan, then the next pell number and so on).
// When n is 0 or p is empty return an empty list.
// If n is more than the length of p repeat the pattern.

// Examples
//             0  1  2  3  4  
// ----------+------------------
// fibonacci:| 0, 1, 1, 2, 3 ...
// padovan:  | 1, 0, 0, 1, 0 ...
// pell:     | 0, 1, 2, 5, 12 ...
// pattern = ['fib', 'pad', 'pel']
// n = 6
// #          ['fib',        'pad',      'pel',   'fib',        'pad',      'pel']
// # result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]
// result = [0, 1, 0, 1, 0, 1]
// pattern = ['fib', 'fib', 'pel']
// n = 6
// #          ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']
// # result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]
// result = [0, 1, 0, 1, 2, 1]

// Sequences  ///// (includes link to paper with function representation of each, for easy use in code)
// fibonacci : 0, 1, 1, 2, 3 ...
// padovan: 1, 0, 0, 1, 0 ...
// jacobsthal: 0, 1, 1, 3, 5 ...
// pell: 0, 1, 2, 5, 12 ...
// tribonacci: 0, 0, 1, 1, 2 ...
// tetranacci: 0, 0, 0, 1, 1 ...

// Pattern mapping
// 'fib' -> fibonacci
// 'pad' -> padovan
// 'jac' -> jacobstahl
// 'pel' -> pell
// 'tri' -> tribonacci
// 'tet' -> tetranacci


function mixbonacci(pattern, length) { // long and annoying, but relatively easy
    if(length==0 || pattern.length==0) return []
    let seqs = {
      'fib': buildseq('fib',length),
      'pad': buildseq('pad',length),
      'jac': buildseq('jac',length),
      'pel': buildseq('pel',length),
      'tri': buildseq('tri',length),
      'tet': buildseq('tet',length)
    }
    return new Array(length).fill(0).map((_,i)=>{
      let l = pattern.length
      return seqs[pattern[i%l]].shift()
    });
  }
  function buildseq(s,n) {
    let arr = []
    switch(s) {
      case 'fib': //a(n) = a(n-1) + a(n-2) with a(0) = 0 and a(1) = 1
        arr = [0,1]
        while(arr.length<n) {
          arr.push(arr[arr.length-1] + arr[arr.length-2])
        }
        break;
      case 'pad': //a(n) = a(n-2) + a(n-3) with a(0) = 1, a(1) = a(2) = 0
        arr = [1,0,0]
        while(arr.length<n) {
          arr.push(arr[arr.length-2] + arr[arr.length-3])
        }
        break;
      case 'jac': //a(n) = a(n-1) + 2*a(n-2), with a(0) = 0, a(1) = 1
        arr = [0,1]
        while(arr.length<n) {
          arr.push(arr[arr.length-1] + 2*arr[arr.length-2])
        }
        break;
      case 'pel': //a(0) = 0, a(1) = 1; for n > 1, a(n) = 2*a(n-1) + a(n-2)
        arr = [0,1]
        while(arr.length<n) {
          arr.push(2*arr[arr.length-1] + arr[arr.length-2])
        }
        break;
      case 'tri': //a(n) = a(n-1) + a(n-2) + a(n-3) for n >= 3 with a(0) = a(1) = 0 and a(2) = 1
        arr = [0,0,1]
        while(arr.length<n) {
          arr.push(arr[arr.length-1] + arr[arr.length-2] + arr[arr.length-3])
        }
        break;
      case 'tet': //a(n) = a(n-1) + a(n-2) + a(n-3) + a(n-4) for n >= 4 with a(0) = a(1) = a(2) = 0 and a(3) = 1
        arr = [0,0,0,1]
        while(arr.length<n) {
          arr.push(arr[arr.length-1] + arr[arr.length-2] + arr[arr.length-3] + arr[arr.length-4])
        }
        break;
    }
    return arr
  }