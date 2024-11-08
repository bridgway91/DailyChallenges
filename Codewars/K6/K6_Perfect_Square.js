// Write function which validates an input string. If the string is a perfect square return true,false otherwise.

// What is perfect square?
// * We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
// * Perfect squares must have same width and height -> cpt.Obvious
// * Squares of random sizes will be tested!

// Function input:
// perfectSquare = "...\n...\n...";    
// // This represents the following Perfect Square:
// `...
//  ...
//  ...`              
// notPerfect = "..,\n..\n...";
// // This is not a Perfect Square:
// `..,
//  ..
//  ...`


function perfectSquare(string){ // so tags indicate wanting a regex soln... which i couldnt think of, so i did this
    let r = string.split('\n')
    return r.every(e=>e.length==r.length && e.split('').every(d=>d=='.'))
  }

// alternatively...

function perfectSquare(string){ // soln i found involving regex, but its nearly the same as mine
    let lines = string.split("\n"), len = lines.length, rex = RegExp("^\\.{"+len+"}$");
    return lines.every( line => rex.test(line) )
  }