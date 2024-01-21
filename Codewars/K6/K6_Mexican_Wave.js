// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

function wave(str){ // VERY CLUNKY, dont like it, blame lack of sleep
    let arr = Array.from(str).fill(str,0,str.length);
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      arr[i] = word.split('').map((el,ind)=>{
        if (ind == i) {
          return el.toUpperCase();
        } else {
          return el;
        }
      }).join('');
    };
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i].toLowerCase()) {
        res.push(arr[i]);
      }
    }
    return res;
  }


// alternatively...

function wave(str){ // much cleaner than mine
    let result = [];
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    return result;
}