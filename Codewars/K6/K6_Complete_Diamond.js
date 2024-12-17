// You have to write a function pattern which returns the following Pattern(See Examples) upto (2n-1) rows, where n is parameter.

// Rules/Note:
// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// All the lines in the pattern have same length i.e equal to the number of characters in the longest line.
// Range of n is (-∞,100]

// pattern(5):
//     1    
//    121   
//   12321  
//  1234321 
// 123454321
//  1234321 
//   12321  
//    121   
//     1    
// (other examples too big to include)


function pattern(n){ // very important to know THAT THE NUMBERS CYCLE BACK TO 0, NOT 10!! ... caused a big headache
    let d = []
    for(let i=1; i<=n; i++) {d.push(' '.repeat(n-i) + line(i) + ' '.repeat(n-i))}
    d = d.concat(d.slice(0,d.length-1).reverse())
    return d.join('\n')
  }
function line(n) {
    let res = ''
    for(let i=1; i<=n; i++) {res += i%10}
    return res + res.split('').reverse().join('').slice(1)
  }