// In this kata, you will be given a string of text and valid parentheses, such as "h(el)lo". You must return the string, with only the text inside parentheses reversed, so "h(el)lo" becomes "h(le)lo". However, if said parenthesized text contains parenthesized text itself, then that too must reversed back, so it faces the original direction. When parentheses are reversed, they should switch directions, so they remain syntactically correct (i.e. "h((el)l)o" becomes "h(l(el))o"). This pattern should repeat for however many layers of parentheses. There may be multiple groups of parentheses at any level (i.e. "(1) (2 (3) (4))"), so be sure to account for these.

// For example:
// reverseInParens("h(el)lo") == "h(le)lo";
// reverseInParens("a ((d e) c b)") == "a (b c (d e))";
// reverseInParens("one (two (three) four)") == "one (ruof (three) owt)";
// reverseInParens("one (ruof ((rht)ee) owt)") == "one (two ((thr)ee) four)";

// Input parentheses will always be valid (i.e. you will never get "(()"). Blank string will also be considered as valid, and should return blank string.


function reverseInParens(text){ // sat staring at the problem for like half an hr trying to figure out how to separate out the (...) sections, once i got that down it was simple
    let arr = text.split(''), grp = [], count=0
    for(let e of arr) {
      if(count==0) { grp.push(e) } else { grp[grp.length-1] += e }
      if(e=='(') {count++}
      if(e==')') {count--}
    }
    grp = grp.map(e=>{
      if(e.includes('(')) {
        let next = e.slice(1,e.length-1).split('').reverse().join('')
        return '(' + reverseInParens(next) + ')'
      } else {
        return e
      }
    })
    return grp.join('')
  }


// or...

function reverseInParens(s){ // oh yeah.. i probly got lucky w/ tests, cuz im pretty sure i shouldve swapped parenth sides when reversing
    const revLst=(i,j)=> s.slice(i,j).reverse().map(c=>c==')'?'(':c=='('?')':c);
    let start = [];
    s = [...s]
    s.forEach( (c,j) =>{
        if(c=='(') start.push(j+1);
        else if(c==')') {
            let i=start.pop();
            s.splice(i, j-i, ...revLst(i,j)); 
        }
    });
    return s.join('');
}