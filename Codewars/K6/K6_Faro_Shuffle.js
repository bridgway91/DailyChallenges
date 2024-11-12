// A faro shuffle of a deck of playing cards is a shuffle in which the deck is split exactly in half and then the cards in the two halves are perfectly interwoven, such that the original bottom card is still on the bottom and the original top card is still on top.

// For example, faro shuffling the list
// ['ace', 'two', 'three', 'four', 'five', 'six']
// gives
// ['ace', 'four', 'two', 'five', 'three', 'six' ]

// If 8 perfect faro shuffles are performed on a deck of 52 playing cards, the deck is restored to its original order.
// Write a function that takes an integer n and returns an integer representing the number of faro shuffles it takes to restore a deck of n cards to its original order.
// Assume n is an even number between 2 and 2000.



// function faroCount(d) {
//   if (d == 2) return 1
//   let k = 1
//   while(k<= 2000) {
//     let mod = d-1
//     if ((Math.pow(2,k) % mod) == 1) {
//       return k
//     } else {
//       k++
//     }
//   }
//   return 'idk'
// }
function faroCount(deckSize){ // dont understand this solution, spent like an hour on this fking problem... first just looked up the math equation for # of shuffles to get back to normal, and found its ((2^k) % (deckCount-1))=1, which i implemented above, but some deck sizes were so fking big, that the k exponent was leading to stupid large values that the comp just calls Inf, which fucks things up... so eventually gave up and looked at answers, none of which make sense, the below is just the cleanest one
    var pos = 2, step = 0; // i *think* pos is for position of a card, and the do() bit 'shuffles' the card and keeps track of shuffles until position is back to normal
    do {
      pos *= 2;
      pos -= pos > deckSize ? deckSize : 1; // gets new position of card after shuffle
      step++;
    } while (pos != 2)
    return step;
  }