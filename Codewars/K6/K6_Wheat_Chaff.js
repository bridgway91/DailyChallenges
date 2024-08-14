// With Cereal crops like wheat or rice, before we can eat the grain kernel, we need to remove that inedible hull, or to separate the wheat from the chaff.

// Task
// Given a sequence of n integers , separate the negative numbers (chaff) from positive ones (wheat).

// Notes
// - Sequence size is at least 3
// - Return a new sequence, such that negative numbers (chaff) come first, then positive ones (wheat).
// - In Java , you're not allowed to modify the input Array/list/Vector
// - Have no fear , it is guaranteed that there will be no zeroes
// - Repetition of numbers in the input sequence could occur , so duplications are included when separating.
// - If a misplaced positive number is found in the front part of the sequence, replace it with the last misplaced negative number (the one found near the end of the input). The second misplaced positive number should be swapped with the second last misplaced negative number. Negative numbers found at the head (begining) of the sequence , should be kept in place .

// Input >> Output Examples:
// wheatFromChaff ([7, -8, 1 ,-2]) ==> return ([-2, -8, 1, 7]) 
// Explanation:
// Since 7  is a positive number , it should not be located at the beginnig so it needs to be swapped with the last negative number -2.

// wheatFromChaff ({-31, -5, 11 , -42, -22, -46, -4, -28 }) ==> return ({-31, -5,- 28, -42, -22, -46 , -4, 11})
// Explanation:
// Since, {-31, -5}  are negative numbers found at the head (begining) of the sequence , so we keep them in place .
// Since 11 is a positive number, it's replaced by the last negative which is -28 , and so on till sepration is complete.

// wheatFromChaff ({-25, -48, -29, -25, 1, 49, -32, -19, -46, 1}) ==> return ({-25, -48, -29, -25, -46, -19, -32, 49, 1, 1})
// Explanation:
// Since {-25, -48, -29, -25}  are negative numbers found at the head (begining) of the input , so we keep them in place .
// Since 1 is a positive number, it's replaced by the last negative which is -46 , and so on till sepration is complete.

// Remeber, duplications are included when separating , that's why the number 1 appeared twice at the end of the output.


function wheatFromChaff(values) { // cleanest other soln... i couldnt get it, stupid site doesnt support findLastIndex(), and other attempts were proving to be too much of a headache
    const o = [...values];
    for (let head = 0, tail = values.length - 1; head < tail; head++, tail--) {
      while (values[head] < 0) head++;
      while (values[tail] > 0) tail--;
      if (head < tail) [o[head], o[tail]] = [o[tail], o[head]];
    }
    return o;
}

// or

function wheatFromChaff(values) { // more drawn out and explained, but same concept as above
    let left = 0;
    let right = values.length - 1;
    while (left < right) {
      // Find the first negative value from the left
      while (values[left] < 0) {
        left++;
      }
      // Find the first positive value from the right
      while (values[right] > 0) {
        right--;
      }
      // Swap the values at the left and right pointers
      if (left < right) {
        [values[left], values[right]] = [values[right], values[left]];
        left++;
        right--;
      }
    }
    return values;
  }