// Create a function that takes a string as a parameter and does the following, in this order:

// - Replaces every letter with the letter following it in the alphabet (see note below)
// - Makes any vowels capital
// - Makes any consonants lower case

// Note:
// - the alphabet should wrap around, so Z becomes A
// - in this kata, y isn't considered as a vowel.

// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)


function changer(str) {  // a little chunky, but proud of recognizing the lack of a need to 'loop' the value
    const alph = 'AbcdEfghIjklmnOpqrstUvwxyzA'
    return str.split('').map(e => {
      if(alph.includes(e.toLowerCase())) {
        return alph[alph.indexOf(e.toLowerCase()) +1]
      }
      if(alph.includes(e.toUpperCase())) {
        return alph[alph.indexOf(e.toUpperCase()) +1]
      }
      return e
    }).join('')
  }


// alternatively...

const changer = str => // would be ideal if i understood the charCode stuff
    str
      .toLowerCase()
      .replace(/[a-z]/g, m => String.fromCharCode((m.charCodeAt(0) - 96) % 26 + 97)) 
      .replace(/[aeiou]/g, m => m.toUpperCase())
// OR
const letters = "abcdEefghIijklmnOopqrstUuvwxyzA"; // at least this is understandable... and even smarter just duplicating the vowels... wouldnt work if two vowels followed each other, but that doesnt happen so thumbs-up
const changer = s => s.replace( /[a-z]/gi, c => letters[ letters.indexOf(c.toLowerCase())+1 ] );