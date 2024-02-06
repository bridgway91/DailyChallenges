// Task:
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:
// If, you can read?

// Output:
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:
// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace



function toNato(words) { // pretty simple
    // you can access the preloaded NATO dictionary
    // NATO['A'] === 'Alfa', etc.
      
    let arr = words.toUpperCase().split('').filter(e=>e!=' ')
    return arr.map(e=>e!=e.toLowerCase() ? NATO[`${e}`] : e).join(' ')
  }

// alternatively...

function toNato(words) { // uses a simple regex, although im not sure what .test(x) does, and cleanly broken up between methods
    return words
      .split('')
      .map(x => /[a-zA-Z]/.test(x) ? NATO[x.toUpperCase()] : x)
      .filter(x => x != ' ')
      .join(' ');
}