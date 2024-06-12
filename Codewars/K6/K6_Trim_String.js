// Define a function trim (JavaScript: method String.prototype.trim) which removes all forms of leading and trailing whitespace from a given string. Please refer to the Sample Tests for more examples.

// Note: The built-in trim, trimLeft && trimRight methods has been disabled.

String.prototype.trim = function() { // this one pissed me off... got pretty much exactly this soln right away, and it kept failing on any string that included \n or \t.... turns out needed to get rid of the 'm' tag after the regex (had to go to solns to figure that out)
    return this.replace(/^\s+|\s+$/g,'');
  };