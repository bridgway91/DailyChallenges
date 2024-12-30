// Write a generator sequence_gen ( sequenceGen in JavaScript) that, given the first terms of a sequence will generate a (potentially) infinite amount of terms, where each subsequent term is the sum of the previous x terms where x is the amount of initial arguments (examples of such sequences are the Fibonacci, Tribonacci and Lucas number sequences).

// ##Examples

// fib = sequenceGen(0, 1)
// fib.next().value = 0 // first term (provided)
// fib.next().value = 1 // second term (provided)
// fib.next().value = 1 // third term (sum of first and second terms)
// fib.next().value = 2 // fourth term (sum of second and third terms)
// fib.next().value = 3 // fifth term (sum of third and fourth terms)
// fib.next().value = 5 // sixth term (sum of fourth and fifth terms)
// fib.next().value = 8 // seventh term (sum of fifth and sixth terms)

// trib = sequenceGen(0,1,1)
// trib.next().value = 0 // first term (provided)
// trib.next().value = 1 // second term (provided)
// trib.next().value = 1 // third term (provided)
// trib.next().value = 2 // fourth term (sum of first, second and third terms)
// trib.next().value = 4 // fifth term (sum of second, third and fourth terms)
// trib.next().value = 7 // sixth term (sum of third, fourth and fifth terms)

// lucas = sequenceGen(2,1);
// arr = [];
// for(i = 0;i < 10;i++){
//   arr.push(lucas.next().value);
// }
// arr === [2, 1, 3, 4, 7, 11, 18, 29, 47, 76]
// Note: You can assume you will get at least one argument and any arguments given will be valid (positive or negative integers) so no error checking is needed.


function* sequenceGen(){ // ok, did not know how to do sequences in JS before this, had to look it up, seems straightforward enough, and managed to solve first try, go me
    let arr = [...arguments]
    
    while(true) {
      arr.push(arr.reduce((a,c)=>a+c,0))
      yield arr.shift()
    }
  }

// or

function* sequenceGen(...seq){ // just slightly cleaner version of mine, nice
    while (true) {
      seq.push(seq.reduce((a, b) => a+b));
      yield seq.shift();
    }
  }