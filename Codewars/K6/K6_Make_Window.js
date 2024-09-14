// Make me a window. I'll give you a number (N). You return a window.

// Rules:
// The window will always be 2 x 2.
// The window needs to have N number of periods across and N number of periods vertically in each pane.

// Example:
// N = 3
// ---------
// |...|...|
// |...|...|
// |...|...|
// |---+---|
// |...|...|
// |...|...|
// |...|...|
// ---------

// Note: there should be no trailing new line characters at the end.


function makeAWindow(num) { // another ASCII project, easy enough
    const tier = '|'+'.'.repeat(num)+'|'+'.'.repeat(num)+'|'
    const row = new Array(num).fill(tier).join('\n')
  
    return '-'.repeat(num*2 + 3)+'\n'
      + row+'\n'
      + '|'+'-'.repeat(num)+'+'+'-'.repeat(num)+'|'+'\n'
      + row+'\n'
      + '-'.repeat(num*2 + 3)
  }