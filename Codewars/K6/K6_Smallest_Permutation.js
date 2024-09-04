// Given a number, find the permutation with the smallest absolute value (no leading zeros).
// -20 => -20
// -32 => -23
// 0 => 0
// 10 => 10
// 29394 => 23499
// The input will always be an integer.


function minPermutation(n) { // I DONT LIKE THIS SOLN, i feel like a 1-line soln should be possible (or 2 at most), but could not think of a simpler way to go about this
    n += ''
    const neg = n[0]=='-'
    const c = n.split('').filter(e=>e!='0').sort().join('')
    const zeros = n.split('').filter(e=>e=='0').join('')
    return Number(c.substring(0,neg?2:1)+zeros+c.substring(neg?2:1))
  }

// alternatively...

const minPermutation = n => +[...n+''].sort().join('').replace(/(0+)(.)/, "$2$1")
// ok... + converts final string into number, then spread array turns n into a split array of strings, which is sorted and joined, finally replace regex swaps the position of any zero-group with the number following it... fuck me