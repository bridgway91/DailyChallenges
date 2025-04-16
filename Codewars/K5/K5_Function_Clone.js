// Without using eval, write a clone method to clone a function's arguments and body into a new function. You don't have to worry about the name of the function; it's impossible to override that property of a function.

// var original = function original_name(a, b) { return a + b; };
// var cloned = o.clone();
// // cloned == function(a, b) { return a + b; }
// So the new cloned function is a completely new object, with its own scope, but effectively behaves the exact same way as the original function.

// NOTE: This kata focuses on ES5 only (function fn() {}), but you get bonus points for making your solution ES6 compatible (fn = (a, b) => a + b)!


Function.prototype.clone = function() { // had to use CGPT to better understand the task, wasnt too bad from there, though did check back and forth with CGPT after each step
    let fnStr = this.toString(), params, body
    if(fnStr.includes('=>')) {
      let arrowIndex = fnStr.indexOf('=>')
      let beforeArrow = fnStr.slice(0, arrowIndex).trim()
      params = beforeArrow.startsWith('(') ? beforeArrow.slice(1, -1).trim() : beforeArrow
      let arrowBody = fnStr.slice(fnStr.indexOf('=>') + 2).trim()
      if (arrowBody.startsWith('{')) {
        let bodyStart = arrowBody.indexOf('{') + 1
        let bodyEnd = arrowBody.lastIndexOf('}')
        body = arrowBody.slice(bodyStart, bodyEnd).trim()
      } else {
        body = 'return ' + arrowBody + ';'
      }
    } else {
      let startParams = fnStr.indexOf('(')
      let endParams = fnStr.indexOf(')')
      params = fnStr.slice(startParams+1, endParams)
      let bodyStart = fnStr.indexOf('{') + 1
      let bodyEnd = fnStr.lastIndexOf('}')
      body = fnStr.slice(bodyStart, bodyEnd).trim()
    }
    return new Function(params, body)
  };

// or...

Function.prototype.clone = function() { // asked CGPT about this, claimed it was basically just eval() in disguise, and while short and clever, could run into issues
    return new Function('return ' + this.toString())();
  };