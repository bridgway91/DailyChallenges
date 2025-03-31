// You are given a string s. Your task is to count the number of each letter (A-Z), and make a vertical histogram as result. Look at the following examples to understand the rules.

// Example
// For s = "XXY YY ZZZ123ZZZ AAA BB C", the output should be:
//           *
//           *
//           *
// *       * *
// * *   * * *
// * * * * * *
// A B C X Y Z

// Rules
// You just need to count the uppercase letters. Any other character will be ignored.
// Using * to represent the number of characters.
// The order of output is form A to Z. Characters that do not appear in the string are ignored.
// To beautify the histogram, there is a space between every pair of columns.
// There are no extra spaces at the end of each row. Also, use "\n" to separate rows.


function verticalHistogramOf(s){ // MY SOLN, DOESNT WORK, IDFK WHY, fking console log outputs the exact thing needed, so idk what the damn issue is
    s = s.replace(/[^A-Z]/gm,'')
    let unique = [...new Set(s)].sort().map(e=>[e,s.split('').filter(l=>l==e).length])
    let res = new Array(Math.max(...unique.map(e=>e[1]))).fill(0)
    for (let count=0; count<res.length; count++) {
      let letters = []
      unique.forEach(l=>{
        if(count<l[1]) { letters.push('*') }
        else { letters.push(' ') }
      })
      res[count] = letters.join(' ')
    }
    res = res.reverse()
    res.push(unique.map(e=>e[0]).join(' '))
    console.log(res.join('\n'))
    return res.join('\n')
  }

// or...

function verticalHistogramOf(s){
    let cnt = [...s.replace(/[^A-Z]/g,'')].reduce((o,c)=>(o[c]=o[c]+1||1,o), {});
    let k   = Object.keys(cnt).sort();
    let n   = Math.max(...Object.values(cnt)); // everything up to here is easy enough, just getting the info
    const buildLine = i => (i==n ? k : k.map(x=>cnt[x]>=n-i?'*':' ') ).join(' ').replace(/ +$/,'');
    return Array.from( {length: n+1}, (_,i) => buildLine(i)).join('\n');
}