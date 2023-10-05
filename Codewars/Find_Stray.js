// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) { // a bit convoluted solution, but clear enough
    const first = numbers[0];
    const rest = numbers.slice(1);
    if (rest.includes(first)) {
      let res = numbers.filter(el=>el!==first);
      return res[0];
    } else {
      return first;
    }
  }


// alternatively...

function stray(numbers){ // really smart method of just comparing the first index found to the last index found... also i need to get more familiar with for-in loops
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }


  const stray = nums => nums.reduce((a, b) => a ^ b); // okay so, ^ stands for XOR... rest of the way this works is a little abstract still, apparently doesnt work with even amounts in array