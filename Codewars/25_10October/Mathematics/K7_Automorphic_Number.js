// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

// Examples
// 25 is an automorphic number, because 625 ends with 25, so return "Automorphic".
// 13 is not an automorphic number, because 169 does not end with 13, so return "Not!!".
// 76 is an automorphic number, because 5776 ends with 76, so return "Automorphic".
// 225 is not an automorphic number, because 50625 does not end with 225, so return "Not!!".
// 625 is an automorphic number, because 390625 ends with 625, so return "Automorphic".
// 1 is an automorphic number, because 1 ends with 1, so return "Automorphic".
// 6 is an automorphic number, because 36 ends with 6, so return "Automorphic".


function automorphic(n){ // easy
  return String(n*n).endsWith(String(n)) ? 'Automorphic' : "Not!!"
}