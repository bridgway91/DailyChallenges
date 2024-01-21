// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) { // problem seemed easier conceptually than it turned out to be (still relatively easy, but required more code than expected... couldve sworn there was an easy way to 1-line swap two array elements, but couldnt find it)
    let arr = text.split(' ');
    let encr_arr = arr.map(el => {
      let temp = el.split('');
      temp[0] = el.charCodeAt(0);
      if(temp.length > 1) {
        let second = temp[1]
        let last = temp[temp.length-1]
        temp[1] = last
        temp[temp.length-1] = second
      }
      return temp.join('')
    })
    return encr_arr.join(' ')
  }

// alternatively...

const encryptWord = w => { // second function to adjust individual words
    const first = w.charCodeAt(0);
    let res;
    switch (w.length) {
      case 0: return '';
      case 1: return first;
      case 2: res = [first, w[1]]; break;
      case 3: res = [first, w[2], w[1]]; break;
      default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
    }
    return res.join('');
  };
  
  const encryptThis = text => text.split(' ').map(encryptWord).join(' ');