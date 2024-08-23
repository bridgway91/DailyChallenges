// Write a function which takes one parameter representing the dimensions of a checkered board. The board will always be square, so 5 means you will need a 5x5 board.
// The dark squares will be represented by a unicode white square, while the light squares will be represented by a unicode black square (the opposite colours ensure the board doesn't look reversed on code wars' dark background). It should return a string of the board with a space in between each square and taking into account new lines.
// An even number should return a board that begins with a dark square. An odd number should return a board that begins with a light square.

// Examples
// Input: 5
// Output:
// ■ □ ■ □ ■
// □ ■ □ ■ □
// ■ □ ■ □ ■
// □ ■ □ ■ □
// ■ □ ■ □ ■

// There should be no trailing white space at the end of each line, or new line characters at the end of the string.
// Note
// The squares are characters ■ and □ with codes \u25A0 and \u25A1.


function checkeredBoard(len) { // was a little confusing with dark vs light, but got it through just checking the submission.. also initial double-for-loop wasnt working for some reason, switched inner loop to a while and got it to run fine (originally wasnt joining the elements together properly)... also had to realize the exception for even-sized boards
    let light = len%2 ? true : false
    let board = []
    for (let i=0; i<len; i++) {
      let row = []
      while(row.length < len) {
        row.push(light ? '\u25A0' : '\u25A1')
        light = !light
      }
      if (len%2 == 0) light = !light
      board.push(row.join(' '))
    }
    return board.join('\n')
  }

// alternatively...

const checkeredBoard = dimension => { // while not really cleaner than mine, does show the interesting idea of just adding the coords to get whether to add a dark or light square
    const isDarkFirst = dimension % 2 === 0
    const square1 = isDarkFirst ? '\u25A1' : '\u25A0'
    const square2 = isDarkFirst ? '\u25A0' : '\u25A1'
    let board = []
    for(let i = 0; i < dimension; i++) {
      let line = []
      for(let k = 0; k < dimension; k++) {
        (i + k) % 2 === 0 ? line.push(square1) : line.push(square2)
      }
      board.push(line.join(' '))
    }
    return board.join('\n')
  }