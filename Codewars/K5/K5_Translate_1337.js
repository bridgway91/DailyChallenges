// An angry wizard cast a spell on your friend. Your buddeh can now only speak in gibberish. However, after tracking down the wizard, you've found his translation scroll below.

// There are four conditions:
// You must not repeat the same key consecutively if there are more than one(the order of keys in the scroll is important!).
// Ex: to_leet('aaaa') # => '4@4@'
// The input will consist only of lowercase alphabetical characters(a-z) and single spaces.
// Ex: to_leet('a a a a a a a') # => '4 @ 4 @ 4 @ 4'
// If a key does not exist for a character, keep the character as is('m' is one such character without a key)
// Ex: to_leet('mama') # => 'm4m@'
// The strings must represent the key(s) on the scroll, meaning that certain characters might have to be escaped.

// The Scroll
//   a = ['4', '@']
//   b = ['|3', '8']
//   d = ['|)', 'o|']
//   e = ['3']
//   f = ['|=']
//   g = ['9', '6']
//   h = ['|-|', ']-[', '}-{', '(-)', ')-(', '#']
//   i = ['1', '!', '][']
//   j = ['_|']
//   k = ['|<', '|{']
//   l = ['|_']
//   n = ['|\|']
//   o = ['0']
//   p = ['|2', '|D']
//   q = ['(,)']
//   r = ['|Z', '|?']
//   s = ['5', '$']
//   t = ['+', '7']
//   v = ['|/', '\/']
//   w = ['\^/', '//']
//   x = ['><', '}{']
//   y = ['`/']
//   z = ['(\)']


const scroll = { // dumb problem, hate the premise, cgpt solved it, im never looking at this again, doesnt even really count as a daily challenge since i did so little, but w/e
    a: ['4', '@'], b: ['|3', '8'], d: ['|)', 'o|'], e: ['3'], f: ['|='],
    g: ['9', '6'], h: ['|-|', ']-[', '}-{', '(-)', ')-(', '#'], i: ['1', '!', ']['],
    j: ['_|'], k: ['|<', '|{'], l: ['|_'], n: ['|\\|'], o: ['0'], p: ['|2', '|D'],
    q: ['(,)'], r: ['|Z', '|?'], s: ['5', '$'], t: ['+', '7'], v: ['|/', '\\/'],
    w: ['\\^/', '//'], x: ['><', '}{'], y: ['`/'], z: ['(\\)']
  };
function toLeet(str) {
    if (!str) return "";
  
    let result = "";
    let prevKey = null;
    const lastUsedIndex = {}; // tracks index per character
  
    for (const char of str) {
      if (char === ' ') {
        result += ' ';
        prevKey = null; // reset to allow fresh choice after space
      } else if (!scroll[char]) {
        result += char;
        prevKey = null;
      } else {
        const options = scroll[char];
        let idx = (char in lastUsedIndex) ? lastUsedIndex[char] : -1;
        let nextIdx = (idx + 1) % options.length;
  
        // Cycle until we find one that’s not equal to prevKey
        let attempts = 0;
        while (options[nextIdx] === prevKey && attempts < options.length) {
          nextIdx = (nextIdx + 1) % options.length;
          attempts++;
        }
  
        const chosen = options[nextIdx];
        result += chosen;
        prevKey = chosen;
        lastUsedIndex[char] = nextIdx;
      }
    }
  
    return result;
  }
  