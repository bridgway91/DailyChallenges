// You need to play around with the provided string (s).
// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.
// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:
// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


function vowelBack(s){ // honestly not happy with this soln, struggled hard trying to figure out a method i liked, got left with this
    // a = 97, z = 122
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    let newalph = ''
    for (let l of alph) {
      if (l=='c'||l=='o') newalph += String.fromCharCode(l.charCodeAt(0)-1)
      else if (l=='d'||l=='e') newalph += 'a'
      else if (l=='a') newalph += 'v'
      else if (l=='i'||l=='u') newalph += String.fromCharCode(l.charCodeAt(0)-5)
      else {
        newalph += String.fromCharCode(l.charCodeAt(0)>113 ? (l.charCodeAt(0)+9)%122 + 96 : l.charCodeAt(0)+9)
      }
    }
    const code = 'code'
    return [...s].map(e=>code.includes(newalph[alph.indexOf(e)]) ? e : newalph[alph.indexOf(e)]).join('')
  }


// alternatively...

function vowelBack(s){ // lot of solns were similar to this, which i also thought of doing, but it seemed cheap.. idk, i guess if it works it works
    console.log(s);
    var ans="";
    var arr="abcdefghijklmnopqrstuvwxyz";
    var ar ="vkbaafpqistuvwnyzabtpvfghi";
    for (var i=0; i<s.length; ++i)
      ans+=ar[arr.indexOf(s[i])];
    return ans;
   }