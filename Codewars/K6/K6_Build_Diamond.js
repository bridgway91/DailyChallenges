// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"


function diamond(n){ // SECOND ATTEMPT, WORKS GREAT -- rather than trying to start from the top and having the sizes go up then back down, just started the construction in the middle and added layers in front and behind it
    if (n < 1 || (n%2 == 0)) return null;
    let arr = [];
    for (let i=0; i*2<n; i++) {
      if (i==0) {
        arr.push('*'.repeat(n))
      } else {
        arr.push(' '.repeat(i)+'*'.repeat(n-2*i));
        arr.unshift(' '.repeat(i)+'*'.repeat(n-2*i));
      };
    };
    return arr.join('\n')+'\n';
  }


// alternatively...

function diamond (n) { // basically the successful version of what i was trying to do on first attempt
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}