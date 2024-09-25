// You have to write a function add which takes two binary numbers as strings and returns their sum as a string.

// Note:
// You are not allowed to convert binary to decimal & vice versa.
// The sum should contain No leading zeroes.

// Examples:
// add('111','10'); => '1001'
// add('1101','101'); => '10010'
// add('1101','10111') => '100100'


function add(a,b){ // conceptually simple, but programming took some time... feel like there's probably some way to slim it way down with bitwise operations
    a = a.padStart(Math.max(a.length,b.length),'0')
    b = b.padStart(Math.max(a.length,b.length),'0')
  
    let res = '', carry = false
    for (let i=a.length-1; i>=0; i--) {
      if(carry) {
        if (a[i] & b[i]) {
          res = '1' + res
        } else if (a[i] ^ b[i]) {
          res = '0' + res
        } else {
          res = '1' + res
          carry = false 
        }
      } else {
        if (a[i] & b[i]) {
          res = '0' + res
          carry = true
        } else if (a[i] ^ b[i]) {
          res = '1' + res
        } else {
          res = '0' + res
        }
      }
    }
    
    if (carry) res = '1' + res
    res = res.replace(/^0+/g,'')
    if (res=='') res = '0'
  
    return res
  };

// decent amount of shorter results from other ppl, but as i cant rly figure out how they're working, gonna leave this as-is