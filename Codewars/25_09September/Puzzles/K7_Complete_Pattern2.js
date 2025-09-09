// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.

// Pattern:
// (n)(n-1)(n-2)...4321
// (n)(n-1)(n-2)...432
// (n)(n-1)(n-2)...43
// (n)(n-1)(n-2)...4
// ...............
// ..............
// (n)(n-1)(n-2)
// (n)(n-1)
// (n)

// Examples:
// pattern(11):
// 1110987654321
// 111098765432
// 11109876543
// 1110987654
// 111098765
// 11109876
// 1110987
// 111098
// 11109
// 1110
// 11


function pattern(n){ // took a bit more figuring out than last one, but not too bad
  let res = []
  for (let i=1; i<=n; i++) {
    res.unshift((res[0]?res[0]:'') + String(n-i+1))
  }
  return res.join('\n')
}