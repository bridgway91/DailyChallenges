// You know what divisors of a number are. The divisors of a positive integer n are said to be proper when you consider only the divisors other than n itself. In the following description, divisors will mean proper divisors. For example for 100 they are 1, 2, 4, 5, 10, 20, 25, and 50.
// Let s(n) be the sum of these proper divisors of n. Call buddy two positive integers such that the sum of the proper divisors of each number is one more than the other number:
// (n, m) are a pair of buddy if s(m) = n + 1 and s(n) = m + 1

// For example 48 & 75 is such a pair:
// Divisors of 48 are: 1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1
// Divisors of 75 are: 1, 3, 5, 15, 25 --> sum: 49 = 48 + 1

// Task
// Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) of buddy pairs such that n (positive integer) is between start (inclusive) and limit (inclusive); m can be greater than limit and has to be greater than n
// If there is no buddy pair satisfying the conditions, then return "Nothing" or (for Go lang) nil or (for Dart) null; (for Lua, Pascal, Perl, D) [-1, -1]; (for Erlang {-1, -1}).

// Examples
// buddy(10, 50) returns [48, 75] 
// buddy(48, 50) returns [48, 75]


function buddy(start,limit) { // not toooo bad, did have some hiccups, but nothing major (first timed out due to not setting decent loop limit in 2nd fn, should know better that its just sqrt(n)..., then second hurdle was from not fully reading the requirements (helpful!) and realizing m must be > n, thankfully the return errors helped me realize)
    let res = []
    for (let n=start; n<=limit; n++) {
      let m = divisorsSum(n) - 1
      if(m<=n) continue
      if(divisorsSum(m)-1 == n) return [n,m]
    }
    return 'Nothing'
  }
function divisorsSum(n) {
    let res=[]
    for (let i=1; i<=Math.sqrt(n); i++) {
      if(n%i == 0) {
        res.push(i)
        res.push(n/i)
      }
    }
    res.push(-n)
    return [...new Set(res)].reduce((a,b)=>a+b)
  }

// or

const s = (n) => { // basically just cleaned up version (perhaps too clean) of mine, going through roughly same steps
    let res = 0
    for(let i = 2; i <= Math.sqrt(n); i++) {
      if(n % i === 0) i === n/i ? res+= i : res += i + n/i
    }
    return res
  }
function buddy(start,limit) {
    for(let i=start; i<= limit; i++) {
      let si = s(i)
      if(i < si && i === s(si)) return [i,si]
    }
    return "Nothing"
  }