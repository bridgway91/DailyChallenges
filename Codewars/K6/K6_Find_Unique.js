// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) { // i wonder about the time-complexity of filter method... feel like this should be one of the faster methods, but not sure
    let zero = arr.filter(e=>e==arr[0])
    let notZero = arr.filter(e=>e!=arr[0])
    if (zero.length == 1) {
      return zero[0]
    } else {
      return notZero[0]
    }
  }


// alternatively...


function findUniq(arr) { // apparently one of the faster solutions
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
  }