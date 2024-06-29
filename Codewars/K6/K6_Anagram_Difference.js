// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word : c od e w ar s (4 letters removed)
// Second word : ha c k er r a nk (6 letters removed)
// Result : 10
// Hints
// A word is an anagram of another word if they have the same letters (usually in a different order).
// Do not worry about case. All inputs will be lowercase.

function anagramDifference(w1,w2){ // took a bit to figure out this method, but pretty simple here, if a little drawn out
    let count = 0
    w1 = w1.split('')
    w2 = w2.split('')
  
    while (w1.length > 0) {
      let l = w1[0]
      let temp1 = w1.filter(e=>e==l)
      let temp2 = w2.filter(e=>e==l)
      count += Math.abs(temp1.length - temp2.length)
      w1 = w1.filter(e=>e!=l)
      w2 = w2.filter(e=>e!=l)
    }
  
    return count + w2.length
  }