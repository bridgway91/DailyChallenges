// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) { // this one was a fucking head-scratcher for sure, took some time to figure out
    if (text == null) return null;
    let arr = text.split('');
    for (let i=0; i<n; i++) {
      let odd = [], even = [];
      for (let j=0; j<arr.length; j++) {
        j % 2 ? odd.push(arr[j]) : even.push(arr[j]);
      };
      arr = odd.concat(even);
    };
    let res = arr.join('');
    return res;  
  }
  
function decrypt(encryptedText, n) {
    if (encryptedText == null) return null;
    let arr = encryptedText.split('');
    console.log(encryptedText);
    for (let i=0; i<n; i++) {
      let splitIndex = Math.floor(arr.length / 2);
      let odd = arr.slice(0,splitIndex);
      let even = arr.slice(splitIndex);
      arr = [];
      while (odd.length > 0 || even.length > 0) {
        arr.length % 2 ? arr.push(odd.splice(0,1)) : arr.push(even.splice(0,1));
      };
    };
    let res = arr.join('');
    return res; 
  }


// alternatively...


function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) { // counts down iterations rather than counting up in a for-loop
      let ans = '';
      for (let i = 1; i < text.length; i += 2) { // builds ans from odd characters in string first
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) { // then adds in even characters
        ans += text[i];
      }
      text = ans; // reassigns text to the rearranged ans
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length); // creates an empty array of the required size
    while (n--) {
      let j = 0; // since encryptedText is preorganized to be odds+evens, uses two for loops and two counting variables (one of which 'i' is independent for odds and evens)
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++]; // note that on first iteration for evens, j is already at the halfway point due to the 'j++'s in previous loop
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }