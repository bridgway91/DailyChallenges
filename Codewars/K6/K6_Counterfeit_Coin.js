// 8 coins are given where all the coins have equal weight, except one. The odd one weights less than the others, not being of pure gold. In the worst case, how many iterations are actually needed to find the odd one out on a two plates scale.
// I am asking you then to tell me what is the minimum amount of weighings it will take to measure n coins in every possible occurrence (including worst case scenario, ie: without relying on luck at all).

// n is guaranteed to be a positive integer.

// Tip: being able to think recursively might help here :p


function howManyMeasurements(n){ // test cases helped figure it out, but originally i was thinking to divide the total by 2 multiple times (since measuring half against half), but that wasnt working, until a google search reminded me i could actually split in 3, measuring third against third (with if same, obv problem coin is in remaining third), so just repeat divisions till <= 1 coins
    if(n<=1) return 0
    if(n<=3) return 1
    let rem = n, mes = 0
    while (rem>1) {
      rem = rem / 3
      mes++
    }
    return mes
  }