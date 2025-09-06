// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.

// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn

// Example:
// pattern(11):
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111


function pattern(n){ // simple
  let res = ''
  for(let i=1; i<=n; i++) {
    res += `${i}`.repeat(i) + '\n'
  }
  return res.slice(0,-1)
}