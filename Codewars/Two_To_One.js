// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const s3 = s1+s2;
    let result = '';
    for (let i=0; i < s3.length; i++) {
      if (!result.includes(s3[i])) {
        result += s3[i];
      }
    };
    return result.split('').sort().join('');
  }

// alternatively...

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

// or

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }