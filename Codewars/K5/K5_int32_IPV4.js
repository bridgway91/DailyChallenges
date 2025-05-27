// Take the following IPv4 address: 128.32.10.1
// This address has 4 octets where each octet is a single byte (or 8 bits).
// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001
// Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

// Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.
// Examples
// 2149583361 ==> "128.32.10.1"
// 32         ==> "0.0.0.32"
// 0          ==> "0.0.0.0"


function int32ToIp(num) { // conceptually easy to understand, but this method is much nicer than what I wouldve done, and the bitwise methods in the comments are even better
  // First octet: top 8 bits (like num >>> 24)
  const octet1 = Math.floor(num / 256 ** 3);
  // Second octet: bits 16–23 (like (num >>> 16) & 255)
  const octet2 = Math.floor(num % 256 ** 3 / 256 ** 2);
  // Third octet: bits 8–15 (like (num >>> 8) & 255)
  const octet3 = Math.floor(num % 256 ** 2 / 256);
  // Fourth octet: lowest 8 bits (like num & 255)
  const octet4 = num % 256;

  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}