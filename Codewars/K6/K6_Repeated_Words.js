// You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?
// As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.
// Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

// Examples
// "dog cat"                  -->  0
// "dog DOG cat"              -->  1
// "apple dog cat"            -->  0
// "pineapple apple dog cat"  -->  0
// "apple apple dog cat"      -->  1
// "apple dog apple dog cat"  -->  0
// "dog dog DOG dog dog dog"  -->  1
// "dog dog dog dog cat cat"  -->  2
// "cat cat dog dog cat cat"  -->  3


function countAdjacentPairs(searchString) { // dont like how long it is, tried to think of a quick regex soln but couldnt figure it out
    let words = searchString.toLowerCase().split(' ')
    let w = words[0], same = false, count = 0
    
    for (let i=1; i<words.length; i++) {
      if (words[i] == w) {
        if (!same) {
          count++
          same = true
        }
      } else {
        w = words[i]
        same = false
      }
    }
    
    return count
  }


// alternatively...


function countAdjacentPairs(searchString) { // basically just adds up cases where word equals the next one in line but NOT the one before it... which works, and im mad
    const words = searchString.toLowerCase().split(/\s+/);
    return words.reduce((repeatedWords, currentWord, i) =>
      currentWord === words[i + 1] && currentWord !== words[i - 1] ? [...repeatedWords, currentWord] : repeatedWords, []).length;
  }