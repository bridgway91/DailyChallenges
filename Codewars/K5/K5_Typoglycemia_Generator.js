// There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.
// Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.
// In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

// Requirement
// return a string where:
// the first and last characters remain in original place for each word
// characters between the first and last characters must be sorted alphabetically
// punctuation should remain at the same place as it started, for example: shan't -> sahn't

// Assumptions
// words are seperated by single spaces
// only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
// special characters do not take the position of the non special characters, for example: -dcba -> -dbca
// for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
// ignore capitalisation


let punctuation = "-',." // not too hard, had to figure out how to handle the punctuation, but once that worked it was relatively smooth sailing
ScrambleWords = function(str){
  let words = str.split(' ')
  words = words.map(e=>{
    let s = e.split('').map((el,ind)=>[el,ind])
    let p = s.filter(el=>punctuation.includes(el[0]))
    let l = s.filter(el=>!punctuation.includes(el[0]))
    let front = l.shift(), back = l.pop()
    let n = 
        (front ? front[0] : '')
      + (l ? l.sort((a,b)=>a[0].localeCompare(b[0])).map(el=>el[0]).join('') : '')
      + (back ? back[0] : '')
    p.forEach(el=>n = n.slice(0,el[1])+el[0]+n.slice(el[1]))
    return n
  })
  return words.join(' ')
};

// or...

function ScrambleWords(str) { // really cool, didnt think replace would work here... granted i NEVER wouldve thought to do this method for handling the punctuation
    let s = str.replace(/[^a-z ]/g, '').replace(/([a-z])([a-z]+)([a-z])/g, (_,a,b,c)=>a+[...b].sort().join``+c) // really cool replace, grabs 3 diff things then replace fn.. cool!
    for (let i = 0; i < str.length; ++i) {
      if (/[^a-z ]/.test(str[i])) s = s.slice(0,i) + str[i] + s.slice(i)
    }
    return s
  }