// Remove the parentheses

// In this kata you are given a string for example:
// "example(unwanted thing)example"

// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:
// "exampleexample"

// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.


function removeParentheses(s){ // a bit too complicated for my liking, but it works... took a while to figure out initial mistake in forloop starting index
    while(s.includes('(') || s.includes(')')) {
      let firstInd = s.indexOf('(')
      let lastInd = 0
      let firstCount = 1
      let lastCount = 0
      
      for (let i=firstInd+1; i<s.length; i++) {
        if(s[i] === '(') firstCount++
        if(s[i] === ')') lastCount++
        if(firstCount == lastCount) {
          lastInd = i
          break
        }
      }
  
      s = s.substring(0,firstInd) + s.substring(lastInd+1)
    }
    return s
  }


// alternatively...


function removeParentheses(s){ // holy shit this is so clever... r stands for 'remove', aka you iterate through string and while r = 0 you dont remove the part (and then concat it to an output 'x'), and it is only positive (or neg) while inside a parentheses
    let r = 0
    let x = ''
    for (let c of s) {
      if (c=='(') r++
      if (r==0) x+=c
      if (c==')') r--
    }
    return x
  }


function removeParentheses(s){ // cleaner version of mine, rather than caring about count of parentheses, simply removes the furthest-in group each loop
    let startIndex;
    let endIndex;
    let str = s;
    
    while (str.includes('(') || str.includes(')')){
      startIndex = str.lastIndexOf('(');
      endIndex = str.indexOf(')', startIndex);
      str = str.slice(0, startIndex) + str.slice(endIndex + 1);
    }
    
    return str;
  }