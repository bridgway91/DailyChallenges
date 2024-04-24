// Write a module Converter that can take ASCII text and convert it to hexadecimal. The class should also be able to take hexadecimal and convert it to ASCII text. To make the conversion well defined, each ASCII character is represented by exactly two hex digits, left-padding with a 0 if needed. The conversion from ascii to hex should produce lowercase strings (i.e. f6 instead of F6).

// Example
// Converter.toHex("Look mom, no hands")
// => "4c6f6f6b206d6f6d2c206e6f2068616e6473"
// Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
// => "Look mom, no hands"


var Converter = { // okay so I fully had to look up guides for this... really not familiar with different text types (hex / ascii / etc)
    toAscii: function (hex) {
      let res = ''
      for (let i=0; i<hex.length; i+=2) {
        res += String.fromCharCode(parseInt(hex.substring(i,i+2),16))
      }
      return res
    },
    toHex: function (ascii) {
      let res = ''
      for (let i=0; i<ascii.length; i++) {
        res += ascii[i].charCodeAt(0).toString(16).padStart(2,'0')
      }
      return res
    }
  }


// alternatively...


function Converter(){} // okay, i like this soln cuz it uses simple regex that i mostly understand
Converter.toAscii = function(hex){
  return hex.replace(/../g, function(h) {
    return String.fromCharCode(parseInt(h,16));
  });
};
Converter.toHex = function(ascii){
  return ascii.replace(/./g, function(a) {
    return a.charCodeAt().toString(16);
  });
};