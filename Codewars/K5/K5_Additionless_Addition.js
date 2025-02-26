// Create an addition function that does not utilize the + or - operators.

// Anti-cheat tests
// You may not use any of these symbols: +-[].'"`
// Moreover, Math, Array, eval, new Function, with and such have been disabled.



function add (x, y) {
    // my attempts...

    //   let a = new Array(x)
    //   let b = new Array(y)
    //   let c = a.concat(b)
    //   console.log(a.length, b.length, c.length)
    //   return c.length

    //   return (0 - x - y) * -1

    // soln found from other answers

    while (y != 0)
    {
        var carry = x & y;  
        x = x ^ y; 
        y = carry << 1;
    }
    
    return x;
}

// long-ass explanation... even after reading i barely understand how you think to do this... step-by-step seems easy to follow, but idk why this method

// The first thing to understand is that this uses addition by adding the bits of numbers together using binary operations.
// For example, if we had these numbers:
// 1 = 0x001
// 2 = 0x010
// we could add them together by just setting all bits that are in either of the numbers:
// 3 = 0x011
// ...and that is what "x = x | y" would be doing.
// It gets a bit more complicated by the fact that both numbers might have the same bit that. In that case, we want to "carry over" the bit, e.g.
// 1 = 0x001
// 1 = 0x001
// becomes:
// 2 = 0x010
// Setting the first number to 0 is made possible by "x = x ^ y". ^ is the XOR operator: it only returns 1 on each bit that are either set in x or y, but not in both.
// Now that the first bit is 0, we still need the the 1 in the next position to appear. These "both bits are 1" collisions are tracked by "var carry = x & y" - that sets only bits to 1 that are in both numbers. After "x = x ^ y" we have added all non-colliding bits to x, so now we can overwrite y to only add the colliding bits in the next-higher bit position - and that's what "carry << 1" does.
// And that happens until y is finally 0, either because it was 0 in the first place or because there was nothing to carry over anymore.

// An example - let's say we're adding:
// 49 = 0x00110001
// 91 = 0x01011011
// Our target result is
// 140 = 0x10001100
// First, we pass the while. y is not 0, so we continue.
// carry = x & y, so it will contain "0x00010001" - the only bit set in both 0x00110001 (49) and 0x01011011 (91).
// x = x ^ y, so only bits only set in either x or y survive. We get: 0x01101010 (106).
// y = carry << 1 - we shift the bit of our carry by one, so we get 0x00100010 (34).
// So now we're trying to add
// x = 0x01101010 (106) and
// y = 0x00100010 (34), which would still result in 140.
// y is not 0, so we pass the while.
// carry = x & y; // 0x00100010
// x = x ^ y; // 0x01001000 (72)
// y = carry << 1; // 0x01000100 (68)
// y is not 0, so we pass the while.
// carry = x & y; // 0x01000000
// x = x ^ y; // 0x00001100 (12)
// y = carry << 1; // 0x10000000 (128)
// x is not 0, so we pass the while.
// carry = x & y; // 0x00000000
// x = x ^ y; // 0x10001100 (140)
// y = carry << 1; // 0x00000000 (0)
// ...and we're done here.

// I've highlighted the decimal representations of the numbers just to make clear that any time after the loop the addition of x and y would still result in 140. We only need to jump through so many hoops to make bits which both have 1s set in the same place carry over.