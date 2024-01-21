// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){ // a bit wordy, but i like it
    let mode = [0,0]
    arr.forEach(el=> {
      let count = arr.filter(n=>n==el).length
      if (count > mode[1]) {
        mode[0] = el
        mode[1] = count
      } else if (count == mode[1]) {
        mode[0] = el > mode[0] ? el : mode[0]
      }
    })
    return mode[0]
  }


// alternatively....

function highestRank(arr) {
    var getNum = num => arr.filter(n => n === num).length;
    return arr.sort((a,b) => getNum(b) - getNum(a) || b - a)[0];
  }