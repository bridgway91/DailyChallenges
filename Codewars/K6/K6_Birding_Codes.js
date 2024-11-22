// In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:
// If the bird's name has only one word, the code takes the first four letters of that word.
// If the name is made up of two words, the code takes the first two letters of each word.
// If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
// If the name is four words long, the code uses the first letter from all the words.
// (There are other ways that codes are created, but this Kata will only use the four rules listed above)

// Complete the function that takes an array of strings of common bird names from North America, and create the codes for those names based on the rules above. The function should return an array of the codes in the same order in which the input names were presented.

// Additional considertations:
// The four-letter codes in the returned array should be in UPPER CASE.
// If a common name has a hyphen/dash, it should be considered a space.

// Example
// If the input array is: ["Black-Capped Chickadee", "Common Tern"]
// The return array would be: ["BCCH", "COTE"]


function birdCode(arr){ // a bit drawn out, but easy to read and really simple
    return arr.map(e=>{
      let split = e.replace(/-/g,' ').split(' ')
      if (split.length == 1) {
        return split[0].slice(0,4).toUpperCase()
      } else if (split.length == 2) {
        return (split[0].slice(0,2) + split[1].slice(0,2)).toUpperCase()
      } else if (split.length == 3) {
        return (split[0][0] + split[1][0] + split[2].slice(0,2)).toUpperCase()
      } else {
        return (split[0][0] + split[1][0] + split[2][0] + split[3][0]).toUpperCase()
      }
    })
  }


// or...

function birdCode(arr){
    return arr.map(function(x){
      let a = x.toUpperCase().split(/[ -]/) // only looking at this b/c, YOU CAN USE REGEX IN SPLIT?? i feel like i shouldve known this
      switch(a.length){
        case 1: return a[0].substr(0,4)
        case 2: return a[0].substr(0,2) + a[1].substr(0,2)
        case 3: return a[0][0] + a[1][0] + a[2].substr(0,2)
        case 4: return a[0][0] + a[1][0] + a[2][0] + a[3][0]
        default: return x;
      }
    });
  }