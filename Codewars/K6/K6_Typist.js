// John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.
// Given a string s. Your task is to count how many times the keyboard has been tapped by John.
// You can assume that, at the beginning the Caps Lock light is not lit.

// Input/Output
// [input] string s
    // A non-empty string. It contains only English letters(uppercase or lowercase).
    // 1 ≤ s.length ≤ 10000
// [output] an integer
    // The number of times John tapped the keyboard.

// Example
// For s = "a", the output should be 1.
// John hit button a.
// For s = "aa", the output should be 2.
// John hit button a, a.
// For s = "A", the output should be 2.
// John hit button Caps Lock, A.
// For s = "Aa", the output should be 4.
// John hit button Caps Lock, A, Caps Lock, a.


function typist(s){ // was gonna do a loop through and try and keep track of caps lock status, but figured it might be easier to just track the changes
    const len = s.length
    const startCaps = s[0]==s[0].toUpperCase() ? 1 : 0
    const shiftUp = (s.match(/[a-z][A-Z]/gm)||[]).length
    const shiftDown = (s.match(/[A-Z][a-z]/gm)||[]).length
  
    return len+startCaps+shiftUp+shiftDown
  }