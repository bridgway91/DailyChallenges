// Variation of another kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).
// A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.
// The side with the largest cumulated strength wins.

// Again, three possible outcomes: odds win, evens win and tie.

// Examples:
// [1,5,12]    => "odds win"  //   1 + 101 vs 1100,         3 vs 2
// [7,-3,20]   => "evens win" // 111 - 11  vs 10100,    3 - 2 vs 2
// [7,-3,-2,6] => "tie"       // 111 - 11  vs -1 + 110,  3 - 2 vs -1 + 2


function bitsWar(numbers) { // easy enough, but dont like how messy the code looks
    // separate input into odds/evens, then convert into only on bits + keeping sign
    const odds = numbers.filter(e=>e%2).map(e=>e.toString(2).split('').filter(d=>d!='0').join('')) // also couldve just done a replace(/0/g,'')
    const even = numbers.filter(e=>e%2==0).map(e=>e.toString(2).split('').filter(d=>d!='0').join(''))
    // add up score for each, subtracting when negative
    const score = [odds.reduce((s,c)=>c[0]=='-' ? s - (c.length-1) : s + c.length,0),even.reduce((s,c)=>c[0]=='-' ? s - (c.length-1) : s + c.length,0)]
    // comparing scores
    return score[0] > score[1] ? 'odds win' : score[0] < score[1] ? 'evens win' : 'tie'
  }

// alternatively...

function bitsWar(numbers) { // did not know about Math.sign(), but even then, smart method...
    let r = numbers.reduce((a,v)=>{ // just reducing the whole array down to a final number, pos if odds win, neg if evens win, 0 if tie
      return a+=Math.sign(v)*(v.toString(2).split('1').length-1)*(v%2?1:-1),a
    },0)
    return r>0?"odds win":r<0?"evens win":"tie"
  }