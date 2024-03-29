// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right

// Example
// ex1 ~O~O~O~O P has 0 deaf rats
// ex2 P O~ O~ ~O O~ has 1 deaf rat
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats


var countDeafRats = function(town) { // again, too drawn out for my taste
    const piperIndex = town.indexOf('P')
    let front = town.slice(0,piperIndex).split(' ').join('')
    let back = town.slice(piperIndex+1).split(' ').join('')
    let deafCount = 0
    
    while(front) {
      let rat = front.slice(0,2)
      if (rat == 'O~') deafCount++
      front = front.slice(2)
    }
    while(back) {
      let rat = back.slice(0,2)
      if (rat == '~O') deafCount++
      back = back.slice(2)
    }
    
    return deafCount
  }
  


// honestly none of the other solns made sense to me