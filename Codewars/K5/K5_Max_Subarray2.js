// In this kata, we have a similar task but you have to find the sub-array or sub-arrays having this maximum value for their corresponding sums of elements. Let's see some examples:
// [-2, 1, -3, 4, -1, 2, 1, -5, 4] returns [[4, -1, 2, 1], 6]
// If in the solution we have two or more arrays having the maximum sum value, the result will have an array of arrays in the corresponding order of the array, from left to right.
// [4, -1, 2, 1, -40, 1, 2, -1, 4]) returns [[[4, -1, 2, 1], [1, 2, -1, 4]], 6]  # From left to right [4, -1, 2, 1] appears in the array before than [1, 2, -1, 4].

// If the array does not have any sub-array with a positive sum of its terms, the function will return [[], 0].

// See more cases in the Example Test Cases Window. Enjoy it!


function findSubarrMaxSum(arr){ // MY SOLN, DOESNT WORK, RAN OUT OF TIME
    console.log('NEXT')
    let sums = {}, max=0, cur=0, start=0
    arr.forEach((n,i)=>{
      cur += n
      if(cur <= 0) {
        cur=0
        start = i+1
      } else if (cur >= max) {
        max = cur
        sums[max] = sums[max] ? sums[max].concat([arr.slice(start, i+1)]) : [arr.slice(start, i+1)]
      }
    })
    console.log(sums)
    let most = Math.max(...Object.keys(sums))
    console.log(most, sums[most])
    return [sums[most].length>1?sums[most]:sums[most][0], most]
  }

// or...

const findSubarrMaxSum = arr => { // idk man, some of it i can follow and some i cant, cant really be bothered spending hours on it
    let result = [], maxDiff = 0;
    
    for (let i = 0, sum = 0, max = 0, min = 0, minIdx = [-1]; i < arr.length; i++) {
      sum += arr[i];
      max = Math.max(sum, max);
      
      if (sum > min && sum < max) continue;
      if (sum === min) {minIdx.push(i); continue}
      if (sum < min) {min = max = sum; minIdx = [i];}
      
      if (max - min === maxDiff && maxDiff)
        minIdx.forEach(idx => result.push(arr.slice(idx + 1, i + 1)));
      
      if (max - min > maxDiff) {
        result = minIdx.map(idx => arr.slice(idx + 1, i + 1));
        maxDiff = max - min;
      }
    }
    
    return [...(result.length === 1 ? result : [result]), maxDiff];
  }