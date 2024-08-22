// In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

// For example:
// hasSubpattern("a") === false; //no repeated pattern
// hasSubpattern("aaaa") === true; //created repeating "a"
// hasSubpattern("abcd") === false; //no repeated pattern
// hasSubpattern("abababab") === true; //created repeating "ab"
// hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern

// Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).


function hasSubpattern(string){ // DOES NOT WORK FOR LARGE STRINGS ... honestly was hoping i had it, but cant figure out a faster soln
    for (let i=1; i<(string.length/2); i++) {
      if (!(string.length % i+1)) continue
      const reg = new RegExp(`${string.slice(0,i+1)}`,'g')
      let str = string.replace(reg,'')
      if (str.length == 0) return true
    }
    return false
  }

// alternatively...

function hasSubpattern(string){ // most solns are either regex or this... dont fully understand, what ive got after testing : succesfful smaller substring can be found through the end of the original string and the start of the repeat, leading to a starting index earlier than just the start of the first full repeat.. interesting, and not fully intuitive to me
    return string.repeat(2).indexOf(string, 1) != string.length
  }