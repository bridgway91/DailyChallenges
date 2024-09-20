// It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// // before
// const myArray = ['a', 'b', 'c'];
// const otherArray = [1, 2, 3];

// exchangeWith(myArray, otherArray);

// // after
// myArray => [3, 2, 1]
// otherArray => ['c', 'b', 'a']


function exchangeWith(a, b) { // thought a simple temp-variable would suffice with switching things around, but it didnt like the reassignments, apparently had to do it piece-by-piece changing out the array contents, so did this
    const aLen = a.length, bLen = b.length
  
    for (let i=aLen-1; i>=0; i--) {
      b.push(a[i])
    }
    for (let i=bLen-1; i>=0; i--) {
      a.push(b[i])
    }
    for (let i=0; i<aLen; i++) {
      a.shift()
    }
    for (let i=0; i<bLen; i++) {
      b.shift()
    }
  }

// alternatively...

function exchangeWith(a, b, c=a.slice()) { // well im dumb for not knowing to use this... mdn: splice(start, deleteCount, item1, item2, /* …, */ itemN), so a is spliced starting from 0, deletes up to it's original length, then adds in b.reverse()... c could be a temp variable within the function itself, but this guy added it in as a parameter
    a.splice(0, a.length, ...b.reverse());
    b.splice(0, b.length, ...c.reverse());
  }

// or

function exchangeWith(a, b) {
    let bLen = b.length
    while (a.length) b.unshift(a.shift())
    while (a.length < bLen) a.push(b.pop())
  }