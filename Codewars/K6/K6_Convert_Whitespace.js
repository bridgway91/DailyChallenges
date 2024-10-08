// Hereinafter, [space] refers to " ", [tab] refers to "\t", and [LF] refers to "\n" for illustrative purposes. This does not mean that you can use these placeholders in your solution.

// In esoteric language called Whitespace, numbers are represented in the following format:
// first character represents the sign: [space] for plus, [tab] for minus;
// characters after that are the binary representation of the absolute value of the number, with [space] for 0, [tab] for 1, the rightmost bit is the least significand bit, and no leading zero bits.
// the binary representation is immediately followed by [LF].

// Notes
// Valid Whitespace number must always have at least two characters: a sign and the terminator. In case there are only two characters, the number is equal to zero.
// For the purposes of this kata, zero must always be represented as [space][LF].
// In Whitespace, only space, tabulation and linefeed are meaningful characters. All other characters are ignored. However, for the purposes of this simple kata, please do not add any other characters in the output.
// In this kata, input will always be a valid negative or positive integer.
// For your convenience, in this kata we will use unbleach() function when evaluating your results. This function replaces whitespace characters with [space], [tab], and [LF] to make fail messages more obvious. You can see how it works in Example Test Cases.

// Examples
// 1 in Whitespace is " \t\n".
// 0 in Whitespace is " \n".
// -1 in Whitespace is "\t\t\n".
// 2 in Whitespace is " \t \n".
// -3 in Whitespace is "\t\t\t\n".


function whitespaceNumber(n) { // honestly expected to run into issues using \n  and \t in strings, but it just worked
    if (n==0) return ' \n'
    
    const bin = Math.abs(n).toString(2)
    
    let res = []
    res.push(n<0 ? '\t' : ' ')
    for (let d of bin) {
      res.push(d=='1' ? '\t' : ' ')
    }
    res.push('\n')
    
    return res.join('')
  }

// alternatively...

var whitespaceNumber = n => { // to be fair, i did think having the \t and \n just together in a string would cause issues, hence my array approach, but the "n ? ..." was a nice touch for the 0-solution issue
    var sign = ' \t'[~~(n < 0)];
    var number = n ? Math.abs(n).toString(2).replace(/0/g, ' ').replace(/1/g, '\t') : '';
    return sign + number + '\n';
  }