// Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:
// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO'] 
// should return: "Total land perimeter: 24".
// Following input:
// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']
// should return: "Total land perimeter: 18"


function landPerimeter(arr) { // was surprisingly annoying, on account of again wanting to find quick and easy shortcuts, as opposed to writing everything out... once i just settled and broke it down to vertical+horizontal, it was simple
    const width = arr[0].length
    const height = arr.length
    if(height == width && height == 1 && arr[0] == 'X') return `Total land perimeter: 4`
    
    let p = 0
    for(let i=0; i<height; i++) { // arr[i][j] = arr[height][width]
      for(let j=0; j<width; j++) {
        if(arr[i][j] == 'O') continue
        // edges
        if(i==0 || i==height-1) p++
        if(j==0 || j==width-1) p++
        // vertical
        if(i==0) {
          if(arr[i+1][j] == 'O') p++
        } else if (i==height-1) {
          if(arr[i-1][j] == 'O') p++
        } else {
          if(arr[i-1][j] == 'O') p++
          if(arr[i+1][j] == 'O') p++
        }
        // horizontal
        if(j==0) {
          if(arr[i][j+1] == 'O') p++
        } else if (j==width-1) {
          if(arr[i][j-1] == 'O') p++
        } else {
          if(arr[i][j-1] == 'O') p++
          if(arr[i][j+1] == 'O') p++
        }
      }
    }
    return `Total land perimeter: ${p}`
  }

// or

function landPerimeter(arr) { // you know, just a better version of mine... grr
    let count = 0;
    for(let y=0; y<arr.length; y++) {
      for(let x=0; x<arr[0].length; x++) {
        if(arr[y][x] === "X") {
          if(y === 0               || arr[y-1][x] !== "X") count++;
          if(y === arr.length-1    || arr[y+1][x] !== "X") count++;
          if(x === 0               || arr[y][x-1] !== "X") count++;
          if(x === arr[0].length-1 || arr[y][x+1] !== "X") count++;
        }
      }
    }
    return "Total land perimeter: " + count;
  }