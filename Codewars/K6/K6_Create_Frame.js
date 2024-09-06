// Given an array of strings and a character to be used as border, output the frame with the content inside.

// Notes:
// Always keep a space between the input string and the left and right borders.
// The biggest string inside the array should always fit in the frame.
// The input array is never empty.

// Example
// frame(['Create', 'a', 'frame'], '+')
// Output:
// ++++++++++
// + Create +
// + a      +
// + frame  +
// ++++++++++


const frame = (text, char) => { // easy, but could maybe be a little cleaner
    const size = [...text].reduce((res,cur)=>cur.length>res ? cur.length : res, 0)
    let build = [...text].map(e=>`${char} ${e.padEnd(size,' ')} ${char}`)
    build.unshift(char.repeat(build[0].length))
    build.push(char.repeat(build[0].length))
    return build.join('\n') // could have built an array in return with top+bottom lines in it, then joined that, but w/e
  };