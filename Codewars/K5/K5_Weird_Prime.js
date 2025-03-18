// Consider the sequence a(1) = 7, a(n) = a(n-1) + gcd(n, a(n-1)) for n >= 2:
// 7, 8, 9, 10, 15, 18, 19, 20, 21, 22, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 69, 72, 73....
// Let us take the differences between successive elements of the sequence and get a second sequence g: 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1....
// For the sake of uniformity of the lengths of sequences we add a 1 at the head of g:
// g: 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1...
// Removing the 1s gives a third sequence: p: 5, 3, 11, 3, 23, 3... where you can see prime numbers.

// Task:
// Write functions:
// 1: an(n) with parameter n: returns the first n terms of the series of a(n) (not tested)
// 2: gn(n) with parameter n: returns the first n terms of the series of g(n) (not tested)
// 3: countOnes(n) with parameter n: returns the number of 1 in the series gn(n) 
//     (don't forget to add a `1` at the head) # (tested)
// 4:  p(n) with parameter n: returns an array filled with the n first distinct primes in the same order they are found in the sequence gn (not tested)
// 5: maxPn(n) with parameter n: returns the biggest prime number of the above p(n) # (tested)
// 6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)
// 7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n) # (tested)

// Note:
// You can write directly functions 3:, 5: and 7:. There is no need to write functions 1:, 2:, 4: 6: except out of pure curiosity.


let sequences = { // MY SOLN, NOT DONE, RAN OUT OF TIME WHILE FAILING TO MAKE PROGRESS
    'a':[],
    'g':[],
    'p':[]
  }
function countOnes(n) {
    console.log(n)
    let i=2
    sequences['a']=[7]
    while(sequences['a'].length<n) {
      let gcd = n
      while(n%gcd!=0 || sequences['a'][i-1]%gcd!=0) {gcd--}
      sequences['a'].push(sequences['a'][i-1] + gcd)
      i++
    }
    let sequences['g'] = sequences['a'].slice().map((e,ind)=>ind==0?e:sequences['a'][i]-sequences['a'][i-1])
    sequences['g'][0] = 1
    return sequences['g'].filter(e=>e==1).length
};
function maxPn(n) {
    console.log(n)
};
function anOverAverage(n) {
    console.log(n)
};

// or...

function countOnes(n) {
    let count = 1, prev = 7, current;
    for (let i = 2; i <= n; i++) {
        current = prev + gcd(i, prev)
        if (current - prev === 1) { count++ }
        prev = current
    }
    return count
}
function maxPn(n) {
    let max = -1, prev = 7, current, primes = new Set()
    for (let i = 2; primes.size < n; i++) {
        current = prev + gcd(i, prev)
        let sub = current - prev
        if (sub > 1) {
            primes.add(sub)
            max = Math.max(max , sub)
        }
        prev = current
    }
    return max
}
function anOverAverage(n) {
    let count = 0, prev = 7, current, sum = 0
    for (let i = 2; count < n; i++) {
        current = prev + gcd(i, prev)
        if (current - prev != 1) { sum += current / i; count++ }
        prev = current
    }
    return sum / count | 0
}
function gcd(x, y) {
    while (y !== 0) {
        let z = x % y
        x = y
        y = z
    }
    return x
}