// Pig latin is created by taking all the consonants before the first vowel (for the purposes of this kata, a "vowel" is any letter from the set a, e, i, o, u) of a word and moving them to the back of the word followed by the letters "ay".
// "hello" => "ellohay"
// "creating" => "eatingcray"

// If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.
// "algorithm" => "algorithmway"

// If a word has no vowels, just append "ay" to the end of it.
// "gym" => "gymay"

// This problem is different from other variations in that it expects casing to remain the same so:
// "Hello World" => "Ellohay Orldway"

// as well as punctuation (for the purposes of this kata, "punctuation" includes ,, ., !, ?, :, ;).
// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"

// Numbers should be left as-is.
// "0875568" => "0875568"

// Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.


function translate(sentence) { // for sure longer than it needs to be, but w/e, its done
    let arr = sentence.split(' ')
    
    arr = arr.map(str=> {
      if(n.includes(str[0])) return str
      let punct = ''
      while(p.includes(str[str.length-1])) {punct += str[str.length-1] ; str = str.slice(0,str.length-1)}
      
      if(v.includes(str[0].toLowerCase())) {return str + 'way' + punct}
      if(!v.split('').some(a=>str.includes(a))) {return str + 'ay' + punct}
      
      let caps = str[0] == str[0].toUpperCase()
      let w = str.toLowerCase().split('')
      while(!v.includes(w[0])) {w.push(w.shift())}
      if(caps) {w[0] = w[0].toUpperCase()}
      return w.join('') + 'ay' + punct
    })
    
    return arr.join(' ')
  };
  const v = 'aeiou'
  const p = ',.!?:;'
  const n = '0123456789'


// or...

const translate = sent => // yeah... lotta ways it couldve been shortened (hopefully mine's at least easier to follow... =\)
    sent.replace(/\b[a-z]+\b/gi, word => {
      if (/^[aeiou]/i.test(word)) {
        return `${word}way`
      } else {
        return word.replace(/\b([^aeiou]+)(\w*)\b/g, (_, m1, m2) => {
          if (m2 && /[A-Z]/.test(m1)) {
            m1 = m1.toLowerCase()
            m2 = m2.replace(/\w/, m => m.toUpperCase())
          }
          return `${m2}${m1}ay`
        })
      }
    })

const translate = s => s.split` `.map(e=>e.replace(/[a-z]+/i, m => {     
    if (/[aeiou]/i.test(m[0])) return m + 'way'
    const sp = m.split(/(?=[aeiou])/);      
    const res = [...sp.slice(1),sp[0]].join`` + 'ay';
    return m[0] < '`' ? res[0].toUpperCase() + res.slice(1).toLowerCase() : res})).join` `;

function translate(sentence) {
    return sentence.replace(/([a-z]+)/ig, function(word){
    var upcase = word[0] !== word[0].toLowerCase();
    var word = word.toLowerCase().replace(/^([qwrtypsdfghjklzxcvbnm]*)(.*)$/, function(_,a,b){
        return b + a + (a === '' ? "w": "") + "ay";
    });
    return upcase ? word[0].toUpperCase() + word.substr(1).toLowerCase() : word; 
    });
};