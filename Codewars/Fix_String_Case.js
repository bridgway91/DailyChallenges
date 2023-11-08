// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

function solve(s){ // really long, want a quicker soln but too lazy to think it up
    const uppArr = s.toUpperCase().split('');
    const lowArr = s.toLowerCase().split('');
    let uppCount = 0;
    let lowCount = 0;
    for(let i = 0; i < s.length; i++) {
      if (s.split('')[i] === uppArr[i]) uppCount++;
      if (s.split('')[i] === lowArr[i]) lowCount++;
    };
    return lowCount >= uppCount ? s.toLowerCase() : s.toUpperCase()
  }

// alternatively....

function solve(s){ // i like this method, smart
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
  }