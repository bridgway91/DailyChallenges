// Task
// Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

// The left side letters and their power:
//  w - 4
//  p - 3 
//  b - 2
//  s - 1

// The right side letters and their power:
//  m - 4
//  q - 3 
//  d - 2
//  z - 1

// - The other letters don't have power and are only victims.
// - The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

// Example
// alphabetWar("s*zz");           //=> Right side wins!
// alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
// alphabetWar("zzzz*s*");       //=> Right side wins!
// alphabetWar("www*www****z");  //=> Left side wins!


function alphabetWar(fight) { // took forever to figure out the regex, and i dont like how extended the for loop is, but w/e
    const regex = /.?\*+.?/gmi
    const filtered = fight.replaceAll(regex, '')
    let left = 0, right = 0
    
    for (let l of filtered) {
      if (l == 'w') left += 4
      if (l == 'p') left += 3
      if (l == 'b') left += 2
      if (l == 's') left += 1
      if (l == 'm') right += 4
      if (l == 'q') right += 3
      if (l == 'd') right += 2
      if (l == 'z') right += 1
    }
  
    if (left > right) return "Left side wins!"
    if (right > left) return "Right side wins!"
    if (left == right) return "Let's fight again!"
  }


// alternatively...

const map = {w:-4, p:-3, b:-2, s:-1, m:4, q:3, d:2, z:1} // knew there was a way to handle values using an object, but couldnt remember how
function alphabetWar(fight){ // seems like every soln used a slightly diff regex
  var res = fight.replace(/[^*]?\*[^*]?/g, '').split('').reduce((a,b) => a + (map[b] || 0), 0);
  return res ? (res < 0 ? 'Left' : 'Right') + ' side wins!' : 'Let\'s fight again!';
}