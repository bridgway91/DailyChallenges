// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.
// The time should be in HH:MM format.

// Examples:
// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)

// Notes
// - Result should be a valid 24-hour time, between 00:00 and 23:59.
// - Only inputs which have valid answers are tested.


function latestClock(a, b, c, d) {// this one gave me such a headache, most of the solns arent entirely clear, and turns out simply getting an array of all possible combinations of set digits is pretty complicated in JS... once i had those it was easy, but god damn...
    const dgts = [a,b,c,d]
    let combs = getPermutations(dgts)
    combs = combs
      .map(arr => arr.join(''))
      .sort((a,b)=>Number(a)-Number(b))
      .filter(n => n<2360)
      .filter(n => Number(n.substring(2)) < 60)
    const latest = combs[combs.length-1]
    return `${latest[0]}${latest[1]}:${latest[2]}${latest[3]}`
  }
  
  const getPermutations = arr => {
    const output = [];
    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };
    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }
      generate(n - 1, heapArr);
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }
        generate(n - 1, heapArr);
      }
    };
    generate(arr.length, arr.slice());
    return output;
  };