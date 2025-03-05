// Write a function deNico/de_nico() that accepts two parameters:
// key/$key - string consists of unique letters and digits
// message/$message - string with encoded message
// and decodes the message using the key.

// First create a numeric key basing on the provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.
// For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
// Let's decode cseerntiofarmit on   using our crazy key.
// 1 2 3 4 5
// ---------
// c s e e r
// n t i o f
// a r m i t
//   o n   
// After using the key:
// 2 3 1 5 4
// ---------
// s e c r e
// t i n f o
// r m a t i
// o n

// Notes
// The message is never shorter than the key.
// Don't forget to remove trailing whitespace after decoding the message

// Examples
// deNico("crazy", "cseerntiofarmit on  ") => "secretinformation"
// deNico("abc", "abcd") => "abcd"
// deNico("ba", "2143658709") => "1234567890"
// deNico("key", "eky") => "key" 


const deNico = (key, m) => { // broke all steps out probly more than needed, but was the only way i could think thru each step
    // separate msg b4 applying key
    let arr = new Array(key.length).fill('')
    for (let i=0; i<m.length; i++) { arr[i%key.length] += m[i] }
    let maxLen = arr[0].length
    // get new key order
    let k2 = key.split('').sort((a,b)=>a.localeCompare(b))
    let newInd = key.split('').map(e=>k2.indexOf(e))
    // apply new order
    let decode = newInd.map(e=>arr[e])
    // pull everything together
    let res = ''
    for (let i=0, j=0; i<decode.length; i++) {
      if(decode[i][j]) { res += decode[i][j] }
      if(i==decode.length-1 && j<maxLen) { i=-1; j++ }
    }
    return res.trimEnd()
  }

// or...

const deNico = (key, m) => {
    let codder = key.split('').sort().map(e => key.indexOf(e)); // basically gets to my newInd in 1 line... =\
    return m.split('').map((_, i) => m[Math.floor(i/key.length)*key.length + codder.indexOf(i % key.length)]).join('').replace(/\s+$/,''); // ok, pretty sure the replace is just for the whitespace, but the whole map process is throwing me... too hard to follow
}