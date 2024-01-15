// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)

function longestRepetition(s) { // idk why but this was harder to think through than i expected given the prompt, having to keep track of 3! different string values, instead of 2, took a while to notice
    let cMax = '', cCur = '', cPrev = ''
    let lMax = 0, lCur = 0
  
    for (let i in s) {
      cCur = s[i]
      lCur = (cCur !== cPrev) ? 1 : lCur+1
      
      cMax = (lCur > lMax) ? cCur : cMax
      lMax = (lCur > lMax) ? lCur : lMax
      
      cPrev = cCur
    }
    
    return [cMax,lMax]
  }


// alternatively...

function longestRepetition(s) { // similar to mine, but in the form of a reduce, also serves as a reminder that reduces can be 'reduced' down to an array, doesnt have to just be a literal single value
    let count = 0;
    let prevLetter = '';
    
    return s.toLowerCase().split('').reduce((acc, curr) => {
      if(curr === prevLetter){
        count++;
      }
      else{
        count = 1;
      }
  
      if(count > acc[1]){
        acc[1] = count;
        acc[0] = curr;
      }
  
      prevLetter = curr;
      return acc;
    }, ['', 0]);
  }