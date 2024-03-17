// Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.

// The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

// Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

// Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an empty array with a 0 length string, '', as input.


function rotate(str){ // a little clunky
    let res = []
    for (let i=0;i<str.length;i++) {
      if (i==0) {
        res.push(str.slice(1)+str[0])
      } else {
        res.push(res[i-1].slice(1)+res[i-1][0])
      }
    }
    return res
  }


// alternatively...


function rotate(s){ // thought splitting then mapping wouldnt work, cuz youd be working with just an individual letter, but this proves me wrong, just ignores the letter and changes it to the original word but shifted (setting that word equal to this new shift, so next operation starts operating on an already shifted part)
    return s.split("").map(e=>s = s.slice(1)+s.slice(0,1));
  }