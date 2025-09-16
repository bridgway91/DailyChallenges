// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:
// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:
//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"

// Help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


function solution(number){ // technically cgpt code, was partway through solving myself but it was more drawn out and I was running low on time, so I asked for this... overall not difficult just time-consuming (although this method is a bit cleaner than mine was)
  const str = String(number).padStart(4, '0');
  const [th, hu, te, on] = [...str].map(Number);

  const toRoman = (d, one, five, ten) => {
    if (d === 9) return one + ten;
    if (d >= 5)  return five + one.repeat(d - 5);
    if (d === 4) return one + five;
    return one.repeat(d); // 0..3
  };

  return 'M'.repeat(th)
       + toRoman(hu, 'C', 'D', 'M')
       + toRoman(te, 'X', 'L', 'C')
       + toRoman(on, 'I', 'V', 'X');
}
