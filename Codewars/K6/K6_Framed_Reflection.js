// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame.

// Example:
        // 'Hello World'
// would give:
        // *********
        // * olleH *
        // * dlroW *
        // *********

// Words in your solution should be left-aligned.


function mirror(text){ // looks ugly, but wasnt too hard
    let arr = text.split(' ').map(s=>'* '+ s.split('').reverse().join(''))
    let maxLine = arr.reduce((acc,cur)=>cur.length > acc ? cur.length : acc,0)
    arr = arr.map(e=>e.padEnd(maxLine) + ' *')
    const boxsize = arr[0].length
    arr.unshift('*'.repeat(boxsize))
    arr.push('*'.repeat(boxsize))
    return arr.join('\n')
  }

// alternatively...


function mirror(s){ // basically just points out my boxsize is just maxLine+4, and didnt need two separate maps, couldve done first map during second
    let a = s.split(' ');
    let m = Math.max(...a.map(x=>x.length));
    a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
    return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
  }