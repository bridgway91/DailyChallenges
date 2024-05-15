// Your task is to find the next higher number (int) with same '1'- Bits.
// I.e. as much 1 bits as before and output next higher than input. Input is always an int in between 1 and 1<<30 (inclusive). No bad cases or special tricks...

// Some easy examples:
// Input: 129  => Output: 130 (10000001 => 10000010)
// Input: 127 => Output: 191 (01111111 => 10111111)
// Input: 1 => Output: 2 (01 => 10)
// Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)

// First some static tests, later on many random tests too;-)!
// Hope you have fun! :-)

function nextHigher(n) { // i can NOT believe how long this took to figure out...dear god i feel stupid
    //   Time-Outs with large starting N
    //   const count = Number(n).toString(2).replace(/0/gm,'').length
    //   while(n++) {
    //     let nextCount = Number(n).toString(2).replace(/0/gm,'').length
    //     if (nextCount == count) return n
    //   }
      const bin = Number(n).toString(2)
      const loc = bin.lastIndexOf('01')
      let res = ''
      if (loc >= 0) {
        res = bin.substring(0,loc)+'10'+bin.substring(loc+2).split('').sort().join('')
      } else {
        res = '10'+bin.split('').sort().join('').substring(0,bin.length-1)
      }
      return parseInt(res,2)
    }


// alternatively...

function nextHigher(n) { // W T F
    let s = n.toString(2).replace(/0?1(1*)(0*)$/, "10$2$1");
    return parseInt(s,2);
  }
// described by person...
// It's bitwise approach (about the reasonning, I mean).
// The pattern is:
// find the rightmost group of set bits (let's call it g)
// set the first 0 at the left of g
// unset the leftmost bit of g
// push all the remaining bits of g to the very right of the binary representation.
// So, here your go...
// input:   11000111100      111000000      1      11111      1000111
// output:  11001000111     1000000011     10     101111      1001011