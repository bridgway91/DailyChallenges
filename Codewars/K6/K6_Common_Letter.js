// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.
// If such letters are two or more, choose the one that appears in the string( earlier.

// For example:
// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'


function replaceCommon(string, letter) { // im sure there's a faster way via using an object counter, but w/e
    const count = [...new Set(string.replace(/ /g,''))].map(e=>[e,string.split('').filter(a=>a==e).length])
  
    let max = ['',0]
    for (let l of count) {
      if(l[1] > max[1]) max = l
    }
  
    return string.replaceAll(max[0],letter)
  }