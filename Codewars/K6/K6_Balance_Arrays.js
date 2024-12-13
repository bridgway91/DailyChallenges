// Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:
// [a,a,a,a,b,b] and [c,c,c,d,c,d]
// Both arrays have four of one item and two of another, so balance should return true.


function balance (arr1, arr2){ // pretty simple problem, and drawn out a bit on my end, but makes it clearer imo
    let u1 = [...new Set(arr1)]
    let u2 = [...new Set(arr2)]
  
    u1 = u1.map(e=>arr1.filter(c=>c==e).length).sort()
    u2 = u2.map(e=>arr2.filter(c=>c==e).length).sort()
  
    for(let i=0; i<Math.max(u1.length,u2.length); i++) {
      if(u1[i] !== u2[i]) return false
    }
    return true
  }