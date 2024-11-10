// The ocean is full of colorful fishes. We as programmers want to know the hexadecimal value of these fishes.

// Task
// Take all hexadecimal valid characters (a,b,c,d,e,f) of the given name and XOR them. Return the result as an integer.

// Input
// The input is always a string, which can contain spaces, upper and lower case letters but no digits.

// Example
// fisHex("redlionfish") -> e,d,f -> XOR -> 12


function fisHex(name) { // had no clue where to start with this one until after read discussions, knew had to get just letters a-f, but then learned had to convert to hex, then xor was obvious but im not too familiar with it, so if it was anything more complicated i wouldve had trouble
    let hex = [...name.match(/[a-f]/gi) || []].map(e=>parseInt(e,16))
    return hex.reduce((a,b)=>a^b,0)
  }


// alternatively...

const fisHex = name => [...name].reduce((acc, char) => acc ^ parseInt(char, 16), 0); // apparently dont have to filter out the non-hex values