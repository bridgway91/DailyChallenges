// Hey You !
// Sort these integers for me ...
// By name ...
// Do it now !

// Input
// Range is 0-999
// There may be duplicates
// The array may be empty

// Example
// Input: 1, 2, 3, 4
// Equivalent names: "one", "two", "three", "four"
// Sorted by name: "four", "one", "three", "two"
// Output: 4, 1, 3, 2

// Notes
// Don't pack words together:
// e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
// e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
// Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
// e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
// e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"


function sortByName(arr) { // annoying, but as hard as expected
  const ones = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"
  ];
  function numToWords(n) {
    if (n < 20) return ones[n];
    if (n < 100) {
      const t = Math.floor(n / 10);
      const o = n % 10;
      return o ? `${tens[t]} ${ones[o]}` : tens[t];
    }
    const h = Math.floor(n / 100);
    const r = n % 100;
    return r
      ? `${ones[h]} hundred ${numToWords(r)}`
      : `${ones[h]} hundred`;
  }
  return arr.slice().sort((a, b) => {
    const nameA = numToWords(a);
    const nameB = numToWords(b);
    return nameA.localeCompare(nameB);
  });
}
