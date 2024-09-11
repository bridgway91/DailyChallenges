// You're playing a game with a friend involving a bag of marbles. In the bag are ten marbles:
// 1 smooth red marble
// 4 bumpy red marbles
// 2 bumpy yellow marbles
// 1 smooth yellow marble
// 1 bumpy green marble
// 1 smooth green marble

// You can see that the probability of picking a smooth red marble from the bag is 1 / 10 or 0.10 and the probability of picking a bumpy yellow marble is 2 / 10 or 0.20.
// The game works like this: your friend puts her hand in the bag, chooses a marble (without looking at it) and tells you whether it's bumpy or smooth. Then you have to guess which color it is before she pulls it out and reveals whether you're correct or not.
// You know that the information about whether the marble is bumpy or smooth changes the probability of what color it is, and you want some help with your guesses.

// Write a function color_probability() that takes two arguments: a color ('red', 'yellow', or 'green') and a texture ('bumpy' or 'smooth') and returns the probability as a decimal fraction accurate to two places.
// The probability should be a string and should discard any digits after the 100ths place. For example, 2 / 3 or 0.6666666666666666 would become the string '0.66'. Note this is different from rounding.
// As a complete example, color_probability('red', 'bumpy') should return the string '0.57'.


function colorProbability(color, texture){ // easy enough.. for some reason was having trouble keeping the final results from rounding, till i remembered all the results should be the same length... 
    const marbles = {
      'smooth':[1,1,1],
      'bumpy':[4,2,1]
    }
    const ind = color=='red' ? 0 : color=='yellow' ? 1 : 2
    return (marbles[texture][ind] / marbles[texture].reduce((a,b)=>a+b)).toFixed(3).slice(0,4)
  }