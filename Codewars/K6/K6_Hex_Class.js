// Create a class Hex which takes a number as an argument.
// Adding a hex object to a number (by using valueOf) generates a number, but calling toString or toJSON will show its hexadecimal value starting with "0x". To make hex objects comparable you have to provide a method equals.

// Example:
// var FF = new Hex(255);
// FF.toString() == "0xFF";
// FF.valueOf() + 1 == 256;

// Also create two methods, plus and minus which will add or subtract a number or Hex object and return a new Hex object.
// var a = new Hex(10);
// var b = new Hex(5);
// a.plus(b).toJSON() == "0xF";

// Also, create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers:
// Hex.parse("0xFF") == 255;
// Hex.parse("FF") == 255;
// Note: If you define both valueOf and toString, "Hex value:" + new Hex(255) may not behave as expected!


function Hex(value){ // so the inner methods were already set up in the challenge, i just wrote in between {}... also was confused at first until i look at the discussions, and then played around with the methods to see their inputs and returns... i also keep forgetting that .valueOf() is a common method that gets the actual value
  
    this.valueOf = function(){return value};
    
    this.toString = function(){return `0x${value.toString(16).toUpperCase()}`};
    
    this.toJSON = function(){return `0x${value.toString(16).toUpperCase()}`};
    
    this.plus = function(n){return new Hex(this+n)};
    
    this.minus = function(n){return new Hex(this-n)}
    
  }
  
  Hex.parse = function(string){ 
    return string[0]=='0' ? parseInt(string.substring(2),16) : parseInt(string,16) // apparently this could just be the last part... the parseInt(string,16)... rest gets figured out on its own =\
  }
  