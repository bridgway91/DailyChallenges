// Let's define two functions:
// S(N) — sum of all positive numbers not more than N
// S(N) = 1 + 2 + 3 + ... + N
// Z(N) — sum of all S(i), where 1 <= i <= N
// Z(N) = S(1) + S(2) + S(3) + ... + S(N)

// You will be given an integer N as input; your task is to return the value of S(Z(N)).

// For example, let N = 3:
// Z(3n) = 1n + 3n + 6n = 10n
// S(Z(3n)) = S(10n) = 55n

// The input range is 1 <= N <= 10^9 and there are 80 ( 40 in LC ) test cases, of which most are random.


function sumOfSums(n) { // DOES NOT SOLVE PROB (only works on smaller numbers)
    return BigInt(S(Z(n)))
  }
function S(n) {
    return (n * (n+1)) / 2
  }
function Z(n) {
    let res = 0
    for(let i=1; i<=n; i++) {
      res += BigInt(S(i))
    }
    return res
  }

// or

function sumOfSums(n){ // so was unfamiliar with the '#n' notation (just BigInt, so when dealing with stupidly large numbers), and that caused problems... technically my soln is fine but just takes stupidly long to solve... math simplification below is best, and i found the first one, but didnt know the second
    const S = (n) => (n*(n+1n))/2n ;
    const Z = (n) => (n*(n+1n)*(n+2n))/6n ;
    return S(Z(n)) ; }