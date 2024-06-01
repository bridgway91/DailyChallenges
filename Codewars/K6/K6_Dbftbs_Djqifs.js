// Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.
// Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

// Your task
// - Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.
// - Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.
// - Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

// Examples
// A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.
// A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.


function encryptor (key, message) { // not too hard, little chunky tho
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    let msg = message.split('')
    let move = key%26
    
    msg = msg.map(e => {
      if (lower.includes(e)) {
        let cyph = (lower.indexOf(e)+move+26) %26
        e = lower.slice(cyph,cyph+1)
      }
      if (upper.includes(e)) {
        let cyph = (upper.indexOf(e)+move+26) %26
        e = upper.slice(cyph,cyph+1)
      }
      return e
    })
      return msg.join('');
  }


// alternatively...

function encryptor(key, message) { // impressive transformation, never would have thought of it
    key = (key % 26 + 26) % 26;
    
    return message.replace(/[a-z]/gi, letter => {
      const shift = (letter >= "a") ? 97 : 65;
      return String.fromCharCode((letter.charCodeAt() - shift + key) % 26 + shift); 
    });
  }