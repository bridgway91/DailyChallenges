// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return string.split('').map(el=>caps.includes(el) ? ` ${el}` : el).join('');
  }

  
// alternatively...

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }

function solution(text) {
    return text.split(/(?=[A-Z])/).join(' ');
  }