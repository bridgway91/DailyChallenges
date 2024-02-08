// Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

// Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

// Example
// "128.32.10.1" => 2149583361


function ipToInt32(ip) { // a little bit extended as i logged every step... really curious if there were shortcuts to be taken at different parts of this
    console.log(ip)
    let nums = ip.split('.').map(n=>{
      n = Number(n).toString(2)
      while(n.length < 8) {
        n = '0'+n
      }
      return n
    })
    console.log(nums)
    let bitnum = nums.join('')
    console.log(bitnum)
    let res = 0
    for (let i = 0; i < bitnum.length; i++) {
      let digit = bitnum[bitnum.length-1 - i]
      res += (digit * Math.pow(2,i))
    }
    console.log(res)
    
    return res
  } // parseInt('10000000001000000000101000000001',2) = 2149583361, aka the answer.... so so couldve just returned this around line 28/29


// alternatively....

function ipToInt32(ip){ // no idea why this works, not explained
    return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
 } // This solution is just like "a.b.c.d" to calculate as a * 256^3 + b * 256^2 + c * 256^1 + d * 256^0.


function ipToInt32(ip){ // also not sure why this one works
    ip = ip.split('.');
    return  ((ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + (ip[3] << 0))>>>0;
}


function ipToInt32(ip){ // similar breakdown to first soln, but clearer
    let arr = ip.split('.').map(n => Number(n));
    arr[0] *= Math.pow(256, 3);
    arr[1] *= Math.pow(256, 2);
    arr[2] *= 256;
    arr[3];
    return arr[0] + arr[1] + arr[2] + arr[3];
  }