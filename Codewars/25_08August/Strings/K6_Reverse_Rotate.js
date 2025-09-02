// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
// If
// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> "" 
// ("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".


function revrot(str, sz) { // annoyed this couldnt be a 1-liner
  if(sz<=0 || sz>str.length || str=='') return ''
  const sumStr = (s) => s.split('').reduce((a,c)=> +a + +c,0)
  const revStr = (s) => s.split('').reverse().join('')
  const rotStr = (s) => s.slice(1) + s[0]
  let arr = [], l=0
  while(l<str.length) {
    let s = str.slice(l,l+sz)
    if(s.length==sz) arr.push(s)
    l += sz
  }
  
  return arr.map(e=> sumStr(e)%2 ? rotStr(e) : revStr(e) ).join('')
}