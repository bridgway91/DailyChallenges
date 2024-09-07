// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

// For example:
// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'
// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'
// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'

// If the feeling can be formed once - plus one to the answer.
// If the feeling can be formed several times from different letters - plus one to the answer.
// Each letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.


function countFeelings(string, array) { // originally thought if a word could be spelled multiple times you'd get a point for each time, but nope!
    const res = array.map(e=>{
      const spl = e.split('')
      return spl.every((l,_,a)=>string.split('').filter(b=>b==l) >= a.filter(c=>c==l)) ? 1 : 0
    })
    const total = res.reduce((a,b)=>a+b)
    return total==1 ? total+' feeling.' : total+' feelings.'
  }