// For encrypting strings this region of chars is given (in this order!):
// all letters (ascending, first all UpperCase, then all LowerCase)
// all digits (ascending)
// the following chars: .,:;-?! '()$%&"
// These are 77 chars! (This region is zero-based.)

// Write two methods:
// function encrypt(text)
// function decrypt(encryptedText)

// Prechecks:
// If the input-string has chars, that are not in the region, throw an Exception(C#, Python) or Error(JavaScript).
// If the input-string is null or empty return exactly this value!

// For building the encrypted string:
// For every second char do a switch of the case.
// For every char take the index from the region. Take the difference from the region-index of the char before (from the input text! Not from the fresh encrypted char before!). (Char2 = Char1-Char2)
// Replace the original char by the char of the difference-value from the region. In this step the first letter of the text is unchanged.
// Replace the first char by the mirror in the given region. ('A' -> '"', 'B' -> '&', ...)

// Simple example:
// Input: "Business"
// Step 1: "BUsInEsS"
// Step 2: "B61kujla"
// B -> U
// B (1) - U (20) = -19
// -19 + 77 = 58
// Region[58] = "6"
// U -> s
// U (20) - s (44) = -24
// -24 + 77 = 53
// Region[53] = "1"
// Step 3: "&61kujla"


const R = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! \'()$%&"'
function encrypt(text) { // fking annoying problem, why wasnt the "REGION" given to us? also the description is shit, hard to understand, overall not too hard, just took a bit, but allowed for good console.log() breakpoints to check progress, which was nice
  if(text==null || text=='') { return text }
  let a = text.split('')
  if(a.some(e=>!R.includes(e))) { throw new Error }
  
  let step1 = a.map((e,i)=>i%2?e==e.toLowerCase()?e.toUpperCase():e.toLowerCase():e)

  let step2 = step1.map((e,i)=>{
    if(i==0) { return e }
    let diff = R.indexOf(step1[i-1]) - R.indexOf(e)
    return R[(diff+77)%77]
  })

  step2[0] = R[76-R.indexOf(step2[0])] // step 3

  return step2.join('')
}
function decrypt(enText) {
  if(enText==null || enText=='') { return enText }
  let a = enText.split('')
  if(a.some(e=>!R.includes(e))) { throw new Error }
  
  a[0] = R[76-R.indexOf(a[0])]
  
  let step2 = [a[0]], i=1
  while(step2.length < a.length) {
    let diff = R.indexOf(a[i]) - 77
    let ind = R.indexOf(step2[step2.length-1]) - diff
    step2.push(R[ind%77])
    i++
  }

  let step3 = step2.map((e,i)=>i%2?e==e.toLowerCase()?e.toUpperCase():e.toLowerCase():e)

  return step3.join('')
}