// Given a string, remove any characters that are unique from the string.

// Example:
// input: "abccdefee"
// output: "cceee"


function onlyDuplicates(str) { // super easy to do this way... tried to find a regex solution, with no luck
    return str.split('').filter((e,i,a)=>a.filter(l=>l==e).length > 1).join('')
  }


// alternatively...


var onlyDuplicates = s => s.replace(/./g,c => s.indexOf(c)==s.lastIndexOf(c) ? '' : c); // so my way was mostly best, but this is a soln that DOES technically use regex, even if only in a 'map' sort of way