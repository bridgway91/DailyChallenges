// Rules
// The Mastermind (computer) will select 4 colours. The colours are randomly selected from ["Red", "Blue", "Green", "Orange", "Purple", "Yellow"]. Colours can be duplicated but there will always be exactly 4.
// The Mastermind will return an array back to you. For every correctly positioned colour in the array an element of "Black" is returned. For every correct colour but in the wrong position an element of "White" will be returned.
// Passing the correct array will pass the Kata test and return "WON!".
// Passing an invalid colour will fail the test with the error "Error: you have given an invalid colour!".
// Passing an invalid array length will fail the test with the error "Error: you must pass 4 colours!".
// Guessing more than 60 times will fail the test with the error "Error: you have had more than 60 tries!".
// All colours are capitalised.
// The return array will be shuffled!

// Task
// Your task is to create a method called mastermind() that will take an object called game. The object has already been preloaded so you do not need to worry about it.
// Within your method you must pass an array into the game object method .check(). This will evoke the object to check your array to see if it is correct.

// Example
// If the Mastermind selected the following colours
// secret code - red, blue, green, yellow
// Then the array you are trying to solve is ["Red", "Blue", "Green", "Yellow"]
// So you guess with
// guess - red, orange, yellow, orange
// ["Red", "Orange", "Yellow", "Orange"]
// Your method would look like this.
// function mastermind(game){
//   answer = game.check(["Red", "Orange", "Yellow", "Orange"]);
// }
// The element 0 => Red is at the correct index so Black is added to the return array. Element 2 => Yellow is in the array but at the wrong index position so White is added to the return array.
// The Mastermind would then return ["Black", "White"] (But not necessarily in that order as the return array is shuffled by the Mastermind).
// Keep guessing until you pass the correct solution which will pass the Kata.

// Check result
// To check the Masterminds return value
//   answer = game.check(["Red", "Orange", "Yellow", "Orange"]);
//   console.log(answer);

// Good luck and enjoy!


function mastermind(game) { // took a bit to wrap my head around, but wasnt too hard once i understood... permutations array was once again obtained for chatgpt, should probably learn how to do that myself
    // check process goes through answer
    // then if color is in guess -> (if not in guess, no return)
    // if yes, check if color is in desired index in guess ->
    // ? returns 'Black' : return 'White'
    // then shuffles return
    const colors = ["Red", "Blue", "Green", "Orange", "Purple", "Yellow"]
    let guess = []
    for (let c of colors) {
      let test = new Array(4).fill(c)
      let res = game.check(test)
      if(res=='WON!') { return }
      res.forEach(_=>guess.push(c))
    }
    let toCheck = getPermutations(guess)
    for (let g of toCheck) {
      let res = game.check(g)
      if(res=='WON!') { return }
    }
  }
  function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const remainingPerms = getPermutations(remaining);
      for (let perm of remainingPerms) {
        result.push([current, ...perm]);
      }
    }
    return result;
  }