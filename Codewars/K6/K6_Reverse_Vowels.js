// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

// For simplicity, you can treat the letter y as a consonant, not a vowel.
// Good luck!

function reverseVowels(str) { // not hard, but a bit involved... wonder if there's a simpler way
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    let revVowel = str.split('').reverse().filter(e=>vowels.includes(e))
    return str.split('').map(e=> vowels.includes(e) ? revVowel.shift() : e).join('')
  }

// alternatively...

const reverseVowels = str => { // basically same as i did, but less methods used, cleaner
    let vowels = str.replace(/[^aeiou]/gi, '').split('');
    return str.replace(/[aeiou]/gi, _ => vowels.pop());
  };