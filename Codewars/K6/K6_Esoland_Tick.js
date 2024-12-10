// Make a custom esolang interpreter for the language Tick. Tick is a descendant of Ticker but also very different data and command-wise.

// Syntax/Info
// Commands are given in character format. Non-command characters should be ignored. Tick has an potentially infinite memory as opposed to Ticker(which you have a special command to add a new cell) and only has 4 commands(as opposed to 7). Read about this esolang here.

// Commands
// >: Move data selector right
// <: Move data selector left(infinite in both directions)
// +: Increment memory cell by 1. 255+1=0
// *: Add ascii value of memory cell to the output tape.

// Examples
// 'Hello world!'  from input:
// '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++*'



function interpreter(tape) { // wasnt too hard, but i figured out the 'break's in switch are really really needed, cuz was getting nonsense as a result before adding those in... couple adjustments after and i got it
    let res = '', hold = [0], i = 0
    
    for (let j=0; j<tape.length; j++) {
      switch(tape[j]) {
          case '>':
            i++
            if(i == hold.length) hold.push(0)
            break
          case '<':
            i--
            if(i<0) {
              hold.unshift(0)
              i = 0
            }
            break
          case '+':
            hold[i]++
            if(hold[i]==256) hold[i]=0
            break
          case '*':
            res += String.fromCharCode(hold[i])
            break
      }
    }
    
    return res
  }

// or

function interpreter(tape) { // much MUCH slimmed down version of what i did
    const mem = []
    let ptr = 0
    let out = ""
    for (const op of tape) {
      switch (op) {
        case ">": ++ptr; break
        case "<": --ptr; break
        case "+": mem[ptr] = (mem[ptr] | 0) + 1 & 255; break
        case "*": out += String.fromCharCode(mem[ptr]); break
      }
    }
    return out
  }