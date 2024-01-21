// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => { // jesus fucking christ this problem sucked... tried a simple for loop to start which didnt work and took me down this rabbit hole
    console.log(`begin ${begin}, end ${end}, step ${step}`)
    if (begin > end) {
      return 0;
    } else if (begin == end) {
      return begin;
    } else if(step == 0) {
      return begin;
    } else {
      let arr = [];
      let sum = begin;
      while (sum <= end) {
        arr.push(sum);
        sum = sum + step;
      };
      return arr.reduce((a,b)=>a+b);
    }
  };


// alternatively...

const sequenceSum = (begin, end, step) => { // pretty damn sure i tried this first and it didnt work, no clue why, maybe i fucked up the syntax somewhere, i hate this problem so much
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum;
  };


sequenceSum = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s); // ooo i like this one