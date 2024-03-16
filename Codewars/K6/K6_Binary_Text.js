// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.


function binaryToString(binary) { // so i did look up the "String.from..." line for converting binary to text, so might be good to memorize that, but rest was mine
    let res = ''
    for (let i=0; i<binary.length; i+=8) {
      let bin = binary.slice(i,i+8)
      res += String.fromCharCode(parseInt(bin,2))
    }
    return res
  }


// alternatively...


function binaryToString(binary) { // did have a half-second thought if regex could split up the input, didnt think to actually look it up and try this out, neat
    return binary.replace(/[01]{8}/g, function(v){ 
      return String.fromCharCode(parseInt(v, 2)); 
    });
  }