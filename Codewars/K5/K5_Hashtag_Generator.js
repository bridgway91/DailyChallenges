// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag(str) { // easy
  if (!str.trim()) return false; // empty or all spaces
  const words = str
    .trim()
    .split(/\s+/) // split by any amount of whitespace
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  const result = '#' + words.join('');
  return result.length > 140 ? false : result;
}
