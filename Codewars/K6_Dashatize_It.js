// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
    let arr = `${Math.abs(num)}`.split('');
    arr = arr.map(el=> el%2 ? `-${el}-` : el).join('');
    if (arr.startsWith('-')) {
      arr = arr.slice(1)
    }
    if (arr.endsWith('-')) {
      arr = arr.slice(0,arr.length-1)
    }
    arr = arr.replace(/--/g,'-')
    return arr
  }

// alternatively...

function dashatize(num) { // ironically my solution is one of the best that doesnt use regex... most other solns used it, like below
    return String(num)
      .replace(/([13579])/g, "-$1-")
      .replace(/--+/g, "-")
      .replace(/(^-|-$)/g, "")
  }