// The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

// The most frequently used key is "GA-DE-RY-PO-LU-KI".
//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.
// The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

// Task
// Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

// Input/Output
// The function should have two parameters.
// The message input string consists of lowercase and uperrcase characters and whitespace character.
// The key input string consists of only lowercase characters.
// The substitution has to be case-sensitive.

// Example
//  encode("ABCD", "agedyropulik");             // => GBCE 
//  encode("Ala has a cat", "gaderypoluki");    // => Gug hgs g cgt 
//  decode("Dkucr pu yhr ykbir","politykarenu") // => Dance on the table
//  decode("Hmdr nge brres","regulaminowy")  // => Hide our beers


function encode(str,key) { // simple enough, not sure why it wants 2 diff functions
    return str.split('').map(e=>{
      const cap = e == e.toUpperCase() ? true : false
      const change = key.includes(e.toLowerCase())
      if(change) {
        let p = key.indexOf(e.toLowerCase())
        if (p%2) {
          return cap ? key[p-1].toUpperCase() : key[p-1]
        } else {
          return cap ? key[p+1].toUpperCase() : key[p+1]
        }
      } else {
        return e
      }
    }).join('')
  }
function decode(str,key) {
      return encode(str,key);   
  }


// or...

const encode = (str, key) => { 
    let cypher = key + key.toUpperCase()// key couldve just had all the uppercases as well... duh
    ,   result = '';
    for (let char of str) {
      let i = cypher.indexOf(char);
      result += i === -1 ? char : cypher[i % 2 ? i - 1 : i + 1]; // by having all cases accounted for in key, dont need to separate as much as i did
    }
    return result;
  }
const decode = encode;