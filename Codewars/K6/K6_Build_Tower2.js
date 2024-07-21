// Build Tower Advanced
// Build Tower by the following given arguments:
// - number of floors (integer and always greater than 0)
// - block size (width, height) (integer pair and always greater than (0, 0))

// Tower block unit is represented as *. Tower blocks of block size (2, 1):
//   **
// block size (2, 3):
//   **
//   **
//   **

// for example, a tower of 3 floors with block size = (2, 3) looks like below
// [
//   '    **    ',
//   '    **    ',
//   '    **    ',
//   '  ******  ',
//   '  ******  ',
//   '  ******  ',
//   '**********',
//   '**********',
//   '**********'
// ]

// and a tower of 6 floors with block size = (2, 1) looks like below
// [
//   '          **          ', 
//   '        ******        ', 
//   '      **********      ', 
//   '    **************    ', 
//   '  ******************  ', 
//   '**********************'
// ]

// Don't return a whole string containing line-endings but a list/array/vector of strings instead!


function towerBuilder(nFloors, nBlockSz) { // not too hard
    let tower = [], b = '*'.repeat(nBlockSz[0])
    const basewidth = nBlockSz[0]*(nFloors*2 - 1)
    for (let i=0; i<nFloors; i++) {
      for(let j=0; j<nBlockSz[1]; j++) {
        let block = b + b.repeat(i*2)
        let space = ' '.repeat((basewidth-block.length)/2)
        tower.push(space + block + space)
      }
    }
    return tower
  }