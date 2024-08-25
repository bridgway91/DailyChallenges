// In this, the first and simplest of a planned trilogy of cat katas :-), all you have to do is determine whether the distances between any visiting cats are large enough to make for a peaceful afternoon, or whether there is about to be an altercation someone will need to deal with by carrying one of them into the house or squirting them with water or what have you.
// As input your function will receive a list of strings representing the yard as a grid, and an integer representing the minimum distance needed to prevent problems (considering the cats' current states of sleepiness). A point with no cat in it will be represented by a "-" dash. Lou, Mustache Cat, and Raoul will be represented by an upper case L, M, and R respectively. At any particular time all three cats may be in the yard, or maybe two, one, or even none.
// If the number of cats in the yard is one or none, or if the distances between all cats are at least the minimum distance, your function should return True/true/TRUE (depending on what language you're using), but if there are two or three cats, and the distance between at least two of them is smaller than the minimum distance, your function should return False/false/FALSE.

// Some examples
// (The yard will be larger in the random test cases, but a smaller yard is easier to see and fit into the instructions here.)
// In this first example, there is only one cat, so your function should return True.
// ["------------",
//  "------------",
//  "-L----------",
//  "------------",
//  "------------",
//  "------------"], 10
// In this second example, Mustache Cat is at the point yard[1][3] and Raoul is at the point yard[4][7] -- a distance of 5, so because the distance between these two points is smaller than the specified minimum distance of 6, there will be trouble, and your function should return False.
// ["------------",
//  "---M--------",
//  "------------",
//  "------------",
//  "-------R----",
//  "------------"], 6
// In this third example, Lou is at yard[0][11], Raoul is at yard[1][2], and Mustache Cat at yard[5][2]. The distance between Lou and Raoul is 9.05538513814, the distance between Raoul and Mustache Cat is 4, and the distance between Mustache Cat and Lou is 10.295630141 -- all greater than or equal to the specified minimum distance of 4, so the three cats will nap peacefully, and your function should return True.
// ["-----------L",
//  "--R---------",
//  "------------",
//  "------------",
//  "------------",
//  "--M---------"], 4

// Have fun!


function peacefulYard(yard, minDistance) { // the wall-of-text prompt was intimidating at first, but its actually relatively simple
    let Lpos, Mpos, Rpos // not even needed, couldve just had the later cats array
    yard.forEach((e,i)=>{
      if(e.includes('L')) Lpos = [e.indexOf('L'),i]
      if(e.includes('M')) Mpos = [e.indexOf('M'),i]
      if(e.includes('R')) Rpos = [e.indexOf('R'),i]
    })
    let cats = [Lpos,Mpos,Rpos].filter(e=>e)
  
    if(cats.length <= 1) return true
    if(cats.length == 2) return distance(cats[0],cats[1]) >= minDistance
    if(cats.length == 3) return (distance(cats[0],cats[1]) >= minDistance)
                                && (distance(cats[1],cats[2]) >= minDistance)
                                && (distance(cats[0],cats[2]) >= minDistance)
  }
  
  function distance(pos1,pos2) {
    return Math.sqrt(Math.pow(pos1[0]-pos2[0],2) + Math.pow(pos1[1]-pos2[1],2))
  }