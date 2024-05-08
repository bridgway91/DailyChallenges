// Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:
// I I I I  # each Pin has a Number:    7 8 9 10
//  I I I                                4 5 6
//   I I                                  2 3
//    I                                    1

// You will get an array of integers between 1 and 10, e.g. [3, 5, 9], and have to remove them from the field like this:
// I I   I
//  I   I
//   I   
//    I   

// Return a string with the current field.

// Note that:
// - The pins rows are separated by a newline (\n)
// - Each Line must be 7 chars long
// - Fill the missing pins with a space character ( )


function bowlingPins(arr) { // took longer due to not remembering i cant reassign a string value inside the if statement... had to basically rebuild it each time (which is dumb)
    let set = '   I   \n  I I  \n I I I \nI I I I'
    let pin = 0
    
    for (let i = 0; i<set.length; i++) {
      if (set[i] == 'I') {
        pin++
        if(arr.includes(pin)) {
          set = set.substring(0,i)+' '+set.substring(i+1)
        }
      }
    }
  
    let rev = set.split('\n').reverse().join('\n')
    
    return rev
  }


// alternatively...

var bowlingPins = a => { // clever idea, use separate function to test if array includes a fed value, then build the entire pin-deck with that function ran where needed
    var i = n => a.includes(n) ? ' ' : 'I'
    return `${i(7)} ${i(8)} ${i(9)} ${i(10)}\n ${i(4)} ${i(5)} ${i(6)} \n  ${i(2)} ${i(3)}  \n   ${i(1)}   `
  }