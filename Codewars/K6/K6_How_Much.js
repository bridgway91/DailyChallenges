// I always thought that my old friend John was rather richer than he looked, but I never knew exactly how much money he actually had. One day (as I was plying him with questions) he said:

// "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
// "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
// "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."

// Could you tell me in each possible case:
// how much money f he could possibly have ?
// the cost c of a car?
// the cost b of a boat?

// Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers as [ ["M: f", "B: b", "C: c"], ... ]. "M" stands for money, "B" for boats, "C" for cars.

// Examples:
// howmuch(1, 100)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
// howmuch(1000, 1100)  => [["M: 1045", "B: 149", "C: 116"]]
// howmuch(10000, 9950) => [["M: 9991", "B: 1427", "C: 1110"]]
// howmuch(0, 200)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]

// Explanation of the results for howmuch(1, 100):
// In the first answer his possible fortune is 37:
// so he can buy 7 boats each worth 5: 37 - 7 * 5 = 2
// or he can buy 9 cars worth 4 each: 37 - 9 * 4 = 1
// The second possible answer is 100:
// he can buy 7 boats each worth 14: 100 - 7 * 14 = 2
// or he can buy 9 cars worth 11: 100 - 9 * 11 = 1


function howMuch(m, n) { // stupid money terms threw me for a loop, but easy enough
    let res = []
    for (let i = Math.min(m,n); i <= Math.max(m,n); i++) {
      if ((i-1)%9 == 0 && (i-2)%7 == 0) {
        res.push([`M: ${i}`,`B: ${(i-2)/7}`,`C: ${(i-1)/9}`])
      }
    }
    return res
  }


// nothing notable