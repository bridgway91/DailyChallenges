// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

// Task:
// Return an array or a tuple or a string depending on the language (see "Sample Tests") with
// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit d to have the smallest number.

// Examples:
// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0
// smallest(209917) --> [29917, 0, 1] or ...
// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.
// smallest(1000000) --> [1, 0, 6] or ...


function smallest(n) { // FAILED, COULD NOT ACCOUNT FOR ALL SITUATIONS.. conceptually easy, but just could not wrap my head around how to handle it and then translate that into code
    // split up into digit array
    let s = String(n).split(''), i=0, j=0, r
    console.log(s)
    // find right-most smallest num besides first one, then adjust i index to be left-most possible when grouped up
    i = s.lastIndexOf(''+Math.min(...s.slice(1)))
    while(s[i-1] == s[i]) {i--}
    console.log(i)
    if(s[i] != s[1]) {
      console.log('not')
      let num = s[i]
      s[i] = ''
      while((s[j] < num) && j<s.length) {j++}
      s[j] = num + (s[j] ? s[j] : '')
      console.log(s, i, j)
      return [+s.join(''),i,j]
    } else { // if num found same as in ind-1, instead move first digit back until it hits higher
      console.log('is')
      i = 0
      let num = s[i]
      s = s.slice(1)
      while((s[j] < num) && j<s.length) {j++}
      s[j] = num + (s[j] ? s[j] : '')
      console.log(s, i, j)
      return [+s.join(''),i,j]
    }
  }
// general plan:
// i = smallest num not first (if all same, i=j=0 -> no change), counted from right
// ERROR if lowest found == same # as just to left of it (then use that one)
// if not tied with index 1, move i to start then move right until bumps into higher
// if tied w/ index-1, move first num back until bumps into higher


// or

Array.prototype.move = function(from, to) { // ok, simple method to swap the number to desired spot
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
};
function smallest(n) { // .......... just created a list of all possible movements of 1 digit, then found min of that T_T
  let iter = `${n}`.length, res = new Map();
  for (let i = 0; i < iter; i++) {
  	for (let j = 0; j < iter; j++) {
      let number = `${n}`.split('').move(i, j).join(''); 
      if (!res.has(+number)) res.set(+number, [i, j]);
    }
  }
  let min = Math.min(...res.keys());
  return [min, ...res.get(min)];
}