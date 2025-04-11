// Given a certain number, how many multiples of three could you obtain with its digits?

// Suposse that you have the number 362. The numbers that can be generated from it are:
// 362 ----> 3, 6, 2, 36, 63, 62, 26, 32, 23, 236, 263, 326, 362, 623, 632 
// But only 3, 6, 36, 63 are multiple of three.

// We need a function that can receive a number and may output in the following order:
// the amount of multiples
// the maximum multiple

// Let's see a case the number has a the digit 0 and repeated digits:
// 6063 ----> 0, 3, 6, 30, 36, 60, 63, 66, 306, 360, 366, 603, 606, 630, 636, 660, 663, 3066, 3606, 3660, 6036, 6063, 6306, 6360, 6603, 6630
// In this case the multiples of three will be all except 0
// 6063 ----> 3, 6, 30, 36, 60, 63, 66, 306, 360, 366, 603, 606, 630, 636, 660, 663, 3066, 3606, 3660, 6036, 6063, 6306, 6360, 6603, 6630
// So the expected result given the above cases:
// Given 362, should return [4, 63]
// (amount of multiples = 4, maximum multiple = 63)
// Given 6063, should return [25, 6630]
// (amount of multiples = 25, maximum multiple = 6630)

// The function will receive only positive integers (num > 0), and you don't have to worry for validating the entries.
// Features of the random tests:
// Number of test = 100
// 1000 ≤ num ≤ 100000000
// Enjoy it!!


function findMult_3(num){ // god this problem was a headache, I knew conceptually how to solve it, and wanted to use chatgpt to just quickly write out a function that gave me all the combinations of various digits in a number, and that was fucking impossible for w/e reason, kept running into issues, i probably shouldve just googled it, and unfortunately at time of submission it's been too long since i worked on this problem i dont really recall the methods at play, so im just gonna ignore this kinda
    let combs = [...new Set(getCombinations(num))].sort((a,b)=>a-b)
    let mult3 = combs.filter(n=>n%3==0&&n!=0)
    return [mult3.length,Math.max(...mult3)];
  }
function getCombinations(num) {
    const digits = String(num).split('');
    const finalResults = new Set();
    const generateSubsets = (path = [], start = 0) => {
      if (path.length > 0) {
        generatePermutations([...path], finalResults);
      }
      for (let i = start; i < digits.length; i++) {
        path.push(digits[i]);
        generateSubsets(path, i + 1);
        path.pop();
      }
    };
    function generatePermutations(arr, resultSet) {
      const used = new Array(arr.length).fill(false);
      arr.sort(); // required for duplicate-skipping
      function backtrack(path) {
        if (path.length === arr.length) {
          resultSet.add(path.join(''));
          return;
        }
        for (let i = 0; i < arr.length; i++) {
          if (used[i]) continue;
          if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue;
          used[i] = true;
          path.push(arr[i]);
          backtrack(path);
          path.pop();
          used[i] = false;
        }
      }
      backtrack([]);
    }
    generateSubsets();
    return Array.from(finalResults).map(Number);
  }