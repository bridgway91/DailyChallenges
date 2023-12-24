// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Take a look at performance: some lists have thousands of elements.
// Please ask before translating.


function partsSums(ls) { // ALL OF THESE SOLUTIONS PASSED THE BASIC TESTS, BUT FKING TIMED OUT FOR RANDOM TESTS WITH THOUSANDS OF ELEMENTS... WTF
    //     return ls.map((n,i) => ls.slice(i).reduce((a,b)=>a+b)).concat([0])
    
    //   let res=[];
    //   for (let i=0; i<ls.length; i++) {
    //     res.push(ls.slice(i).reduce((a,b)=>a+b,0));
    //   };
    //   res = res.concat([0]);
    //   return res;
      
      let res = [0];
      let total = 0;
      for (let i = ls.length-1; i>=0; i--) {
        total += ls[i];
        res.unshift(total);
      };
      return res;
    }

// alternatively...

function partsSums(ls) {
    let sum = ls.reduce((a,v) => a + v, 0)
    return [sum].concat(ls.map(v => sum -= v))
}

function partsSums(ls) { // supposedly the fastest solution

    let res = new Array(ls.length + 1);
    res[ls.length] = 0;
    
    for (let i = ls.length - 1; i >= 0; i--) 
      res[i] = res[i + 1] + ls[i];
    
    return res;
    
  }