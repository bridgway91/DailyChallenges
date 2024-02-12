// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'


function decipherThis(str) { // really long and drawn out, took a good bit of fine-tuning... not happy with result, but it gets there.. happy I properly used regex for once
    let arr = str.split(' ')
    arr = arr.map(e=>{
      let firstNum = Number(e.match(/[0-9]/g).join(''));
      let rest = e.match(/[a-zA-Z]/g) || '';
      if (rest) {
        let temp = rest[0];
        rest[0] = rest[rest.length-1];
        rest[rest.length-1] = temp;
        rest = rest.join('')
      }
      return String.fromCharCode(firstNum) + rest;
    })
    return arr.join(' ')
  }


// alternatively...

const decipherThis = text => text // simplest one that didnt use a complicated regex
    .split(' ')
    .map(e => {
        const num = parseFloat(e) || '';
        const word = e.split(num)[1];

        if (word.length === 1) return String.fromCharCode(num) + word;
        return String.fromCharCode(num) + word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
    })
    .join(' ')


function decipherThis(str) {
    // Split the input string into an array of words
    const words = str.split(' ');
    
    // Iterate over each word in the array
    const decodedWords = words.map(word => {
        // Extract the first letter (which is a character code)
        const charCode = parseInt(word);
        // Convert the character code to its corresponding letter
        const firstLetter = String.fromCharCode(charCode);
        // Extract the rest of the word (after the first character code)
        const restOfWord = word.slice(String(charCode).length);
        // Swap the second and last letters of the word
        const modifiedRestOfWord = restOfWord.length > 1 ? restOfWord[restOfWord.length - 1] + restOfWord.slice(1, -1) + restOfWord[0] : restOfWord;
        // Combine the modified first letter with the modified rest of the word
        return firstLetter + modifiedRestOfWord;
    });
    
    // Join the array of decoded words into a string and return it
    return decodedWords.join(' ');
    }