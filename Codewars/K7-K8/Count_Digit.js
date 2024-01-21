// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.


function nbDig(n, d) { // last line was convoluted enough i doubted it was gonna work on first run
    let arr = [...Array(n+1).keys()];
    let sqarr = arr.map(el=>el*el);
    return sqarr.join('').split('').filter(el=>el==d).length;
  }


// alternatively...

function nbDig(n, d) { // whereas i setup the whole list of nums and then counted, this solution is counting as each number is squared
    var res=0;
        for (var g=0;g<=n;g++){
          var square=(g*g+"").split("");
          square.forEach((s)=>s==d?res++:null)
        }return res;
    }


nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length; // so this creates an array of size n+1 with each element being the index squared, joins the whole array, then runs a global match for d, which i assume outputs a string or array of only the matches, and returns the length