// Reverse every other word in a given string, then return the string.
// Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
// Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){ // easy enough, could be a 1-liner but wanted to space it out
    let arr = str.split(' ')
    let check = arr.map((e,i)=>(i%2)?e.split('').reverse().join(''):e)
    return check.join(' ').trim()
  }


// alternatively...

const reverse=str=>str.trim().split(' ').map((e,i)=> i%2==0 ? e : e.split('').reverse().join('')).join(' '); // see? easy, basically same thing i did