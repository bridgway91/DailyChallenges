// The number 12 is the first number in having six divisors, they are: 1, 2, 3, 4, 6 and 12. Your challenge for this kata is to find the minimum number that has a certain number of divisors. For this purpose we have to create the function findMinNum() that receives the wanted number of divisors num_div, and outputs the smallest number having an amount of divisors equals to num_div.

// Let's see some cases:
// find_min_num(10) = 48 # divisors are: 1, 2, 3, 4, 6, 8, 12, 16, 24 and  48
// find_min_num(12) = 60

// In this kata all the tests will be with numDiv < 80

// Enjoy it and happy coding! (Memoization is advisable)


// okay, honestly i dont really understand how to get this one, or how these other solutions were found... i did see some website that specified how to find all the divisors and figure out the smallest on, but had no idea how to translate what i was reading into actual code... so here's a couple other solutions

function findMinNum(num) {
    let memo = {1:1}
    for (let n = 2; ; n++) {
      let depth = 1
      for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) { depth++ }
      }
      memo[depth] = memo[depth] || n //remember the smallest
      if (memo[num]) return memo[num]
    }
  }

//

function divisors(integer) {
    var count = 1;
    for (var i=1; i<=integer/2; i++) {
      if (integer%i===0) count++;
    }
    return count;
  }
var findMinNum = (function() {
    var memo = {};
    var lowest = 1;
    function f(n) {
      var value;
      if (!(n in memo)) { 
        while (value != n) {
          value = divisors(lowest);
          memo[value] = memo[value] ? memo[value] : lowest;
          lowest++;
        }
      }
      return memo[n];
    }
    return f;
  })();

//

function findMinNum(num) {
  let arr = []
  for (let i = 10000; i >= 1; i--) {
    let arr1 = []
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr1.push(j)
      }
      if (j === i) {
        if (arr1.length === num) {
          arr = arr1
          break
        } else arr1 = []
      }
    }
  }
  return arr[arr.length - 1]
}