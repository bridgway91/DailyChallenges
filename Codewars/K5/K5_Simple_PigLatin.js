// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str) { // meh
    return str
      .split(' ')
      .map(word => {
        if (/^[a-zA-Z]+$/.test(word)) {
          return word.slice(1) + word[0] + 'ay';
        } else {
          return word; // punctuation
        }
      })
      .join(' ');
  }
  