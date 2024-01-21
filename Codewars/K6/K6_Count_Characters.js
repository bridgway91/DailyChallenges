// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) { // long but simple and clear
    let count = {};
    let str = string.split('');
    while (str.length > 0) {
      let char = str.shift();
      if (Object.keys(count).includes(char)) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    };
    return count;
  }

// alternatively...

function count (string) {  // simplified version of mine
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }