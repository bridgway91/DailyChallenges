// The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

// Example:
// str1 = "what a beautiful day today"
// str2 = "it's okay, but very breezy"

// When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.
// If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.


function sortStringsByVowels(strings) { // this was a struggle to think through, but i got it mostly first try! (had to switch a and b) woot!
    return strings.sort((a,b)=>([...b.match(/[aeiou]+/gmi) || []]).reduce((acc,cur)=>cur.length > acc ? cur.length : acc,0) - ([...a.match(/[aeiou]+/gmi) || []]).reduce((acc,cur)=>cur.length > acc ? cur.length : acc,0))
  }

// alternatively...

function sortStringsByVowels(ss) { // im too brain fried right now to think these through, but theyre here if i ever come back to this
    const gl=s=>(Math.max(...(s.match(/[aeiou]+/ig)||[]).map(r=>r.length)))
    return ss.sort((a,b)=>gl(b)-gl(a));
  }

function sortStringsByVowels(strings){

    const details = strings.map((str, idx) => {
      const vowels = str.match(/[aeiou]+/gi) || [];
      const max = Math.max(...vowels.map(g => g.length), 0);
      return { str, idx, max };
    });
    
    return details.sort((a, b) => b.max - a.max || a.idx - b.idx).map(a => a.str);
    
  }