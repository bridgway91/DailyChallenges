// Implement the following methods:

// Object.prototype.random(): returns randomly one of the values of the object.
// For example:
// var obj = {
//     a: 1,
//     b: {
//         x: 2,
//         y: 3
//     },
//     c: {
//         z: {
//             q: 4
//         }
//     }
// };
// obj.random(); //returns 1 or 2 or 3 or 4. All values have the same probability to be returned
// obj = {};
// obj.random(); //returns undefined

// Object.prototype.toRandomArray(): returns an array of the random values.
// For example,
// var obj = {
//     a: 1,
//     b: {
//         x: 2,
//         y: 3
//     },
//     c: {
//         z: {
//             q: 4
//         }
//     }
// };
// obj.toRandomArray(); //returns a random permutation of [1, 2, 3, 4]
// obj = {};
// obj.toRandomArray(); //returns []


Object.prototype.random = function() { // annoying problem, first b/c i doubt ill ever need to make use of this, AND the settings for the problem were so far back that .flat() and other methods weren't available, so had to come up with a recursive solution to getting out all the values of the nested objects
	let vals = this.toRandomArray()
  return vals[Math.floor(Math.random() * vals.length)]
};
Object.prototype.toRandomArray = function() {
  let vals = []
  const getData = (obj) => {
    if(typeof(obj)=='object' && !Array.isArray(obj)) {
      getData([...Object.values(obj)])
    } else if (Array.isArray(obj)) {
      obj.forEach(e=>getData(e))
    } else {
      vals.push(obj)
    }
  }
  const permute = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  getData(this)
  return permute(vals)
};