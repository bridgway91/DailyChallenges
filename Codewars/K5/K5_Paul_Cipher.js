// We need to encode a message.

// Only alpha characters will be encoded. Non-alpha characters will be copied. So, the message " 0123. " would be encoded to " 0123. ".
// For alpha characters, we will follow these rulse:
// 1.  All alpha characters will be treated as upper case
// 2.  The first alpha character will not change (except for switching to upper case).
// 3.  All subsequent alpha characters will be shifted toward 'Z' by the 
//     alphabetical position of the previous alpha character.  
//     (wrap back to 'A' if 'Z' is passed)

// For example: "He1lo" would be encoded as follows:
// H -> H (first alpha character does not change)
// e -> M (H is the previous alpha character, and is the 8th letter in the alphabet.  E + 8 = M)
// 1 -> 1 (non alpha characters do not change)
// l -> Q (E is the previous alpha character, and is the 5th letter in the alphabet.  L + 5 = Q)
// o -> A (L is the previous alpha character, and is the 12th letter in the alphabet.  O + 12 = A)
// So, "He1lo" would be encoded to "HM1QA"

// Write two functions. One to encode and one to decode. (Decoding "HM1QA" should yield "HE1LO")
// For both functions, empty strings and null strings should return empty strings.


function encode(msg) { // process was simple enough to figure out
    if (!msg) return "";
  
    const A_CODE = 'A'.charCodeAt(0);
    let prevShift = 0;
  
    return msg.toUpperCase().split('').map(char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) { // A-Z
        const newCharCode = ((code - A_CODE + prevShift) % 26) + A_CODE;
        prevShift = code - A_CODE + 1;
        return String.fromCharCode(newCharCode);
      }
      return char;
    }).join('');
  }
function decode(msg) {
    if (!msg) return "";
  
    const A_CODE = 'A'.charCodeAt(0);
    let prevShift = 0;
  
    return msg.toUpperCase().split('').map(char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) { // A-Z
        const originalCharCode = ((code - A_CODE - prevShift + 26) % 26) + A_CODE;
        prevShift = originalCharCode - A_CODE + 1;
        return String.fromCharCode(originalCharCode);
      }
      return char;
    }).join('');
  }
  