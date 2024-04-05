// Implement a function, so it will produce a sentence out of the given parts.

// Array of parts could contain:
// - words;
// - commas in the middle;
// - multiple periods at the end.

// Sentence making rules:
// - there must always be a space between words;
// - there must not be a space between a comma and word on the left;
// - there must always be one and only one period at the end of a sentence.

// Example:
// makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'


function makeSentence(parts) { // this soln is fking stupid, hopefully i can properly learn a better one
    let res = parts.join(' ') + '.'
    res = res.replaceAll(/\s+/gm, ' ')
    res = res.replaceAll(/\s,\s/gm, ', ')
    res = res.replaceAll(/\s\.\s/gm, '.')
    res = res.replaceAll(/\s+\./gm, '.')
    res = res.replaceAll(/\.+/gm, '.')
    return res
  }


// alternatively...

function makeSentence(parts) { // doesnt even use regex!! annoyingly this soln (+ others) just ignore any periods found when building return, then add one at the end... probably shoudlve thought of that
    return parts.reduce(function(a,b){
      return b === ","? a + b : b === "."? a + "" : a + " " + b;
    }) + ".";
  }