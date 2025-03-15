// Your goal in this kata is to implement a difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b. Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5 000 000 elements.
// arrayDiffVeryFast([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from another:
// arrayDiffVeryFast([1,2,2,2,3],[2]) == [1,3]


function arrayDiffVeryFast(a, b) { // was a little worried about timing out, but it worked, first try
    let bad = {}
    b.forEach(e=>{
      if(!bad[e]) { bad[e] = true }
    })
    return a.filter(e=>!bad[e])
  }

// or...

function array_diff_very_fast(a, b) { // ok, basically same thing as me, but more streamlined
    const set = new Set(b);
    return a.filter(n => !set.has(n));
  }