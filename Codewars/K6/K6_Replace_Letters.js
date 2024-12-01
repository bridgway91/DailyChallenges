// In input string word(1 word):
// replace the vowel with the nearest left consonant.
// replace the consonant with the nearest right vowel.
// P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

// For example:
// 'codewars' => 'enedazuu'
// 'cat' => 'ezu'
// 'abcdtuvwxyz' => 'zeeeutaaaaa'

// It is preloaded:
// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
// const vowels = ['a','e','i','o','u'];

// P.S. You work with lowercase letters only.


function replaceLetters(word) { // could be a lot simpler code and with a faster run time if just used an object pairing every letter with what replaces it, but that seemed like a brute force-y work around, so went with this
    let a = alphabet.slice()
    a.unshift('z')
    a.push('a')
    
    return word.split('').map(e=>{
      let i = a.indexOf(e)
      if (vowels.includes(e)) {
        while(true) {
          if (consonants.includes(a[i])) return a[i]
          i--
        }
      } else {
        while(true) {
          if (vowels.includes(a[i])) return a[i]
          i++
        }
      }
    }).join('')
  }

// or...

replaceLetters=w=>w.replace(/./g,c=>"zeeediiihooooonuuuuutaaaaa"[c.charCodeAt()-97]) // well damn, also a brute force-y work around, but even simpler than what i was thinking, fk me
