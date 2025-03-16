// The Caesar cipher is a notorious (and notoriously simple) algorithm for encrypting a message: each letter is shifted a certain constant number of places in the alphabet. For example, applying a shift of 5 to the string "Hello, world!" yields "Mjqqt, btwqi!", which is jibberish.
// In this kata, your task is to decrypt Caesar-encrypted messages using nothing but your wits, your computer, and a set of the 1000 (plus a few) most common words in English in lowercase (made available to you as a preloaded variable named WORDS, which you may use in your code as if you had defined it yourself).

// Given a message, your function must return the most likely shift value as an integer.

// A few hints:
// Be wary of punctuation
// Shift values may not be higher than 25


function breakCaesar(st){ // honestly turned out easier than i expected, just took a bit to think through how to code
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    const common = [...WORDS]
    const backShift = (str) => {
      return str.split('').map(l=>alph[(alph.indexOf(l)+25)%26]).join('')
    }
    const start = st.toLowerCase().replace(/[^a-z ]/g,'').split(' ')
  
    let shiftMatch = [], cur = start
    for (let i=1; i<26; i++) {
      cur = cur.map(e=>backShift(e))
      let match = cur.reduce((a,c)=>a = common.includes(c) ? a+1 : a, 0)
      shiftMatch.push([i,match])
    }
  
    let best = shiftMatch.sort((a,b)=>b[1]-a[1])
    return best[0][0]
  }