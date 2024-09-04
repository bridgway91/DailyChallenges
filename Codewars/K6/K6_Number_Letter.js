// Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. Each number has a single alphabet letter somewhere within it.
// Example : "24z6 1x23 y369 89a 900b"
// As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.
// Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)

// Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.
    // The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
    // This has to work for any size of numbers sent in (after division, go back to addition, etc).
    // In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
    // Remember to also round the final answer to the nearest integer.

// Examples :
// "24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
// "24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
// "10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

// Good luck and may the CODE be with you!


function doMath(string) { // wasnt too bad, sort was confusing until i realized the first test wasnt the exact same as the example they used, then had a brief scare with not noticing when to start the math operations... did figure out a neat way to handle cycling through math operations though
    const sorted = string.split(' ').sort((a,b)=>a.replace(/[0-9]/g,'')<b.replace(/[0-9]/g,'')?-1:1)
    let res=+sorted[0].replace(/[^0-9]/g,'')
    for (let i=1; i<sorted.length; i++) {
      let math = i%4
      if(math==1) res+= +sorted[i].replace(/[^0-9]/g,'')
      if(math==2) res-= +sorted[i].replace(/[^0-9]/g,'')
      if(math==3) res*= +sorted[i].replace(/[^0-9]/g,'')
      if(math==0) res/= +sorted[i].replace(/[^0-9]/g,'')
    }
    return Math.round(res)
  }