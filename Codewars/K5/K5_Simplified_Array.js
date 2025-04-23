// You're given an array arr. Apply the following algorithm to it:
// find intervals of consecutive prime numbers and consecutive non-prime numbers;
// replace each such interval with the sum of numbers in it;
// if the resulting array is different from the initial one, return to step 1, otherwise return the result.

// Input
// A non-empty integer array such that:
// -10000 ≤ arr[i] ≤ 10000
// 1 ≤ arr.length ≤ 1000

// Output
// An integer array.

// Examples
// For arr = [1, 2, 3, 5, 6, 4, 2, 3] the result should be [21, 5]:
// [1, 2, 3, 5, 6, 4, 2, 3] --> [(1), (2 + 3 + 5), (6 + 4), (2 + 3)] --> [1, 10, 10, 5]
// [1, 10, 10, 5] --> [(1 + 10 + 10), (5)] --> [21, 5]
// For arr = [-3, 4, 5, 2, 0, -10] the result should be [1, 7, -10]:
// [-3, 4, 5, 2, 0, -10] --> [(-3 + 4), (5 + 2), (0 + -10)] --> [1, 7, -10]


function isPrime(n) { // obtained via giving CGPT psuedo-code, concept is simple enough, work was hectic though so brain kinda friend trying to read this...
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
      if (n % i === 0) return false;
    return true;
  }
function collapse(arr) {
    const result = [];
    let sum = arr[0];
    let isGroupPrime = isPrime(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      const sameGroup = isPrime(arr[i]) === isGroupPrime;
      if (sameGroup) {
        sum += arr[i];
      } else {
        result.push(sum);
        sum = arr[i];
        isGroupPrime = !isGroupPrime;
      }
    }
    result.push(sum);
    return result;
  }
function simplifiedArray(arr) {
    let prev = arr, next;
    do {
      next = collapse(prev);
      if (next.length === prev.length) break;
      prev = next;
    } while (true);
    return next;
  }
  