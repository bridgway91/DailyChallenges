// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".



function rot13(message){ // this was easier than some K6 problems... regardless, answer could be slimmed down using a replace all, capturing each piece and adjusting it's char code, but this was simpler for me
    let l = 'abcdefghijklmnopqrstuvwxyz'
    let u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return message.split('').map(e=>{
      if(l.includes(e)) {return l[(l.indexOf(e)+13)%26]}
      else if(u.includes(e)) {return u[(u.indexOf(e)+13)%26]}
      else return e
    }).join('')
  }