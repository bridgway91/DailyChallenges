// Task
// You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.

// Rules
// 1. There are always exactly three reels
// 2. Each reel has 10 different items.
// 3. The three reel inputs may be different.
// 4. The spin array represents the index of where the reels finish.
// 5. The three spin inputs may be different
// 6. Three of the same is worth more than two of the same
// 7. Two of the same plus one "Wild" is double the score.
// 8. No matching items returns 0.

// Scoring
// Item     Three of the same   Two of the same     Two of the same plus one Wild
// Wild     100                 10                  N/A
// Star     90                  9                   18
// Bell     80                  8                   16
// Shell    70                  7                   14
// Seven    60                  6                   12
// Cherry   50                  5                   10
// Bar      40                  4                   8
// King     30                  3                   6
// Queen    20                  2                   4
// Jack     10                  1                   2

// Returns
// Return an integer of the score.

// Example

// reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// spin = [5,5,5];

// reel1[5] == "Cherry"
// reel2[5] == "Cherry"
// reel3[5] == "Cherry"
// Cherry + Cherry + Cherry == 50

// result == 50

// Good luck and enjoy!


function fruit(reels, spins){ // expected this to be a lot more involved than it turned out to be, wasnt too bad
    const results = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]].sort()
    const uniques = Array.from(new Set(results))
    
    const scores = ['','Jack','Queen','King','Bar','Cherry','Seven','Shell','Bell','Star','Wild']
    
    switch(uniques.length) {
        case 1:
          return scores.indexOf(uniques[0]) * 10
          break;
        case 2:
          if (results[2] == 'Wild' && results[1] != 'Wild') {
            return scores.indexOf(results[1]) * 2
          } else {
            return scores.indexOf(results[1])
          }
          break;
        case 3:
          return 0
          break;
    }
  }