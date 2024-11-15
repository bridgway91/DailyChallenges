// Mrs Jefferson is a great teacher. One of her strategies that helped her to reach astonishing results in the learning process is to have some fun with her students. At school, she wants to make an arrangement of her class to play a certain game with her pupils. For that, she needs to create the arrangement with the minimum amount of groups that have consecutive sizes.

// Let's see. She has 14 students. After trying a bit she could do the needed arrangement: [5, 4, 3, 2]
// one group of 5 students
// another group of 4 students
// then, another one of 3
// and finally, the smallest group of 2 students.

// As the game was a success, she was asked to help to the other classes to teach and show the game. That's why she desperately needs some help to make this required arrangements that make her spend a lot of time.
// To make things worse, she found out that there are some classes with some special number of students that is impossible to get that arrangement.
// Please, help this teacher!

// Your code will receive the number of students of the class. It should output the arrangement as an array with the consecutive sizes of the groups in decreasing order.
// For the special case that no arrangement of the required feature is possible the code should output [-1]    
// The value of n is unknown and may be pretty high because some classes joined to to have fun with the game.


function shortestArrang(n) { // THIS IS SOOOO BRUTE-FORCED... not good code, but couldnt think of better way... also sum function was from a previous attempt
    console.log(n)
    if(n%2) {
      return [Math.ceil(n/2),Math.floor(n/2)]
    } else if (Number.isInteger((n-3)/3)) {
      let i = (n-3)/3
      return [i+2, i+1, i]
    } else if (Number.isInteger((n-6)/4)) {
      let i = (n-6)/4
      return [i+3, i+2, i+1, i]
    } else if (Number.isInteger((n-10)/5)) {
      let i = (n-10)/5
      return [i+4, i+3, i+2, i+1, i]
    } else if (Number.isInteger((n-15)/6)) {
      let i = (n-15)/6
      return [i+5, i+4, i+3, i+2, i+1, i]
    } else if (Number.isInteger((n-21)/7)) {
      let i = (n-21)/7
      return [i+6, i+5, i+4, i+3, i+2, i+1, i]
    } else if (Number.isInteger((n-28)/8)) {
      let i = (n-28)/8
      return [i+7, i+6, i+5, i+4, i+3, i+2, i+1, i]
    }
    
    return [-1]
  }


// alternatively...

function shortestArrang(n) {  // basically a better implemented version of my first attempt 
    let sum = 0,
        arr = [],
        start = Math.ceil(n / 2),
        foundAnswer = false;
    while (!foundAnswer) {
      for (let i = start; i > 0; i--) {
        arr.push(i);
        sum += i;
        if (sum > n) {
          arr = [];
          sum = 0;
          i = start;
          start--;
        } else if (sum === n) {
          foundAnswer = true;
          return arr;
        }
      }
      return arr = [-1]
    }
  }

// or

function shortestArrang(n){ // ... huh?
    for(let l=2; l*l<2*n; l++) if(2*(n/l%1)===(l+1)%2) return [...Array(l)].map((_,i)=>(n/l)+(l-1)/2-i)
    return [-1];
  }