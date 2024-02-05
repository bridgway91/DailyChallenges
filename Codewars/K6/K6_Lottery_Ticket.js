// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.



function bingo(ticket, win){ // could easily see this being a 1-line solution, but the headache of trying to make that work seemed too troublesome, much easier and clearer when broken down
    let miniWins = ticket.map(el=> {
      let match = 0
      for (let i=0; i<el[0].length; i++) {
        if (el[0].charCodeAt(i) == el[1]) match = 1;
      }
      return match
    })
    return (miniWins.reduce((a,b)=>a+b,0) >= win) ? 'Winner!' : 'Loser!'
  }


// alternatively...

function bingo(ticket, win){ // potential 1-liner, my idea involved a reduce count but this works too
    if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
    {
      return "Winner!";
    }
    return "Loser!";
  }


function bingo(ticket, win){ // i didnt think of trying .includes() , although having to add in .fromCharCode() would've thrown me; havent used it before
    var count = 0;
    ticket.forEach(game => {
      if (game[0].includes(String.fromCharCode(game[1]))) {
        count++;
      }
    });
    return (count >= win) ? "Winner!" : "Loser!";
  }