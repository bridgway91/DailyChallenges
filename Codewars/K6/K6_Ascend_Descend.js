// You are given three integer inputs: length, minimum, and maximum.
// Return a string that:
// - Starts at minimum
// - Ascends one at a time until reaching the maximum, then
// - Descends one at a time until reaching the minimum
// - repeat until the string is the appropriate length

// Examples:
//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"

// Notes:
// - length will always be non-negative
// - negative numbers can appear for minimum and maximum values
// - hyphens/dashes ("-") for negative numbers do count towards the length
// - the resulting string must be truncated to the exact length provided
// - return an empty string if maximum < minimum or length == 0
// - minimum and maximum can equal one another and result in a single number repeated for the length of the string


function ascendDescend(length, min, max) { // gave me a bit of a headache at first, but got it figured out... not happy with how big it is still
    if (min>max || length==0) return ''
    if (min==max) return new Array(length).fill(min).join('')
    let str = '', temp = min, up = true
    while (str.length < length) {
      str += temp
      up ? temp++ : temp--
      if (temp==max) up=false
      if (temp==min) up=true
    }
    return str.substring(0,length)
  }


// alternatively...

function ascendDescend(len, min, max) { // so just built out a full forward/back rotation, then repeated it as necessary, and returned a slice of needed length... not bad
    var res = "";
    for (var i = min; i < max; i++) res += i;
    for (var j = max; j > min; j--) res += j;
    if (min === max) res = min.toString();
    return res.repeat(len).slice(0, len);
}