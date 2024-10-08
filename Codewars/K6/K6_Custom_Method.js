// JavaScript provides an Array.prototype.forEach method that allows you to iterate over array values. For this exercise you will create your own array method called 'each'. It will be similar to the forEach method, except for one difference. If the callback function returns true then the loop will stop and no additional values will be iterated.

// The following shows a contrived example of how this new method would be used:

// var letters = ['a', 'b', 'c', 'd', 'e']
// var allowedLetters = []
// letters.each(function(letter, index){
//   // break out of the loop if we reached a letter with the value 'd'
//   if(letter == 'd') {
//     return true;
//   }
//   allowedLetters.push(letter);   
// })

// // allowedLetters should equal ['a', 'b', 'c']


// no clue...
Array.prototype.each = function(callback) { // supposedly against the spirit of the task, but highest rated
    return this.some(callback);
  }
// or
Array.prototype.each = function (callback) { // okay now this makes sense somewhat, forgot to loop through "this" in my original attempt, just tried to check value of callback(this)
    for (let i = 0; i < this.length; ++i) {
      if (callback(this[i], i) === true) {
        break;
      }
    }
  };