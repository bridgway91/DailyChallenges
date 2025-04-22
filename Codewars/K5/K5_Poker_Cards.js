// In this kata, your task is to reduce values in the input array which are poker card symbols or their codes.
// Reduction is about getting card symbols or card codes without the offset which is added by card color (symbols: ['c','d','h','s'] -> club, diamond, heart, spade).
// This kind of transformation (getting the root value of a card) is very helpful for evaluating a poker hand, which is the subject of a future kata 'Calculating poker hand'.
// Base (reduced) card codes and symbols are (index: code, value: human-readable symbol): ['A','2','3','4','5','6','7','8','9','T','J','Q','K']

// Requirements:
// You can get four types of input:
// Non-array argument - you must return null
// Empty array - you must return an empty array
// Array of symbols (strings) - you must return reduced symbols sorted by symbol code in ascending order: reduceCards(['Td','Qd', '8c','Ac', 'Ks','Qs']) returns ["A", "8", "T", "Q", "Q", "K"]
// Array of codes (integers) - you must return reduced codes sorted by their value in ascending order: reduceCards() returns ``

// Additional info:
// You may find it useful to solve my previous kata about encoding/decoding poker hands: Poker cards encoder/decoder
// To illustrate how card codes are propagated over colors, this table is very helpful:
//   c    |     d     |    h     |    s
// ---------------------------------------
//  0: A      13: A      26: A      39: A
//  1: 2      14: 2      27: 2      40: 2
//  2: 3      15: 3      28: 3      41: 3
//  3: 4      16: 4      29: 4      42: 4
//  4: 5      17: 5      30: 5      43: 5
//  5: 6      18: 6      31: 6      44: 6
//  6: 7      19: 7      32: 7      45: 7
//  7: 8      20: 8      33: 8      46: 8
//  8: 9      21: 9      34: 9      47: 9
//  9: T      22: T      35: T      48: T
// 10: J      23: J      36: J      49: J
// 11: Q      24: Q      37: Q      50: Q
// 12: K      25: K      38: K      51: K


function reduceCards(cards){ // misread the problem, even easier than i thought, couldve solved my own but CGPT jumped the gun and gave me all this... w/e, couldve done myself so not stressing it
    if (!Array.isArray(cards)) return null;
    if (cards.length === 0) return [];
  
    const base = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
    if (typeof cards[0] === "string") { // Input like ['Td','Qd','8c']
      return cards
        .map(s => s[0])
        .sort((a, b) => base.indexOf(a) - base.indexOf(b));
    }
  
    if (typeof cards[0] === "number") { // Input like [14, 50, 9]
      return cards
        .map(n => n % 13)
        .sort((a, b) => a - b);
    }
  
    return null;
  }