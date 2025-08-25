// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){ // im a little embarassed how long this took me...
  let res = []
  for(let i=0; i<str.length; i = i+2) {
   res.push(i+1==str.length ? str[i]+'_' : str[i]+str[i+1])
  }
  return res
}