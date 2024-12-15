// You have a grid with m rows and n columns. Return the number of unique ways that start from the top-left corner and go to the bottom-right corner. You are only allowed to move right and down.

// For example, in the below grid of 2 rows and 3 columns, there are 10 unique paths:
// o----o----o----o
// |    |    |    |
// o----o----o----o
// |    |    |    |
// o----o----o----o

// Note: there are random tests for grids up to 1000 x 1000 in most languages, so a naive solution will not work.


function numberOfRoutes(m, n){ // knew there would be an easy way to solve it, but did have to look it up (the math solution... not the whole coding soln)
    return fact(m+n) / (fact(m)*fact(n))
  }
function fact(n) {
    let res = 1
    for(let i=2; i<=n; i++) {
      res *= i
    }
    return res
  }