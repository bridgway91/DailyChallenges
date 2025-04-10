// Given n representing the number of floors build a penthouse like this:
//         ___
//        /___\                
//       /_____\
//       |  _  |     1 floor
//       |_|_|_|
//        _____
//       /_____\
//      /_______\
//     /_________\             
//    /___________\
//    |           |
//    |    ___    |     2 floors
//    |   |   |   |
//    |___|___|___|
//       _______
//      /_______\
//     /_________\
//    /___________\
//   /_____________\
//  /_______________\
// /_________________\
// |                 |         3 floors
// |                 |
// |      _____      |
// |     |     |     |
// |     |     |     |
// |_____|_____|_____|
// Note: whitespace should be preserved on both sides of the roof. No invalid input tests.
// Good luck!


function myCrib(n) { // simple, just some math/counting and testing return after each attempt, nothing difficult
    // build backwards (bot to top), padding spaces to front+back for diff in total length
    // total height = 4n+1 = 2n + (2n+1) == array length
    // total width = (2n-1)*3 + 4 = 1+(2n-1)+1+(2n-1)+1+(2n-1)+1 = 6n+1
    let crib = new Array(4*n + 1).fill('')
    let maxLen = 6*n + 1
    crib = crib.map((_,i)=>{
      if(i==0) {
        return ('|' + '_'.repeat(2*n -1)).repeat(3) + '|'
      } else if (i<n) {
        return ('|' + ' '.repeat(2*n -1)).repeat(3) + '|'
      } else if (i==n) {
        return '|' + ' '.repeat(2*n) + '_'.repeat(2*n-1) + ' '.repeat(2*n) + '|'
      } else if (i<2*n) {
        return '|' + ' '.repeat(maxLen-2) + '|'
      } else if (i<4*n) {
        let gap = i-2*n
        return ' '.repeat(gap) + '/' + '_'.repeat(maxLen - 2*gap - 2) + '\\' + ' '.repeat(gap)
      } else {
        return ' '.repeat(2*n) + '_'.repeat(2*n+1) + ' '.repeat(2*n)
      }
    })
    return crib.reverse().join('\n')
  }