// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:
// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)
// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]
// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]
// Super Sad -> Sad -> Normal -> Happy -> Super Happy

// Example:
// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
// More in test cases!

// Notes:
// The array could be empty, in that case return the same empty array
// All emotions will be valid


function sortEmotions(arr, order){ // not hard, just had to realize how to setup emotion recognition
    const emotionsSorted = [':D',':)',':|',':(','T_T']
    if (order) {
      arr.sort((a,b)=>emotionsSorted.indexOf(a) - emotionsSorted.indexOf(b))
    } else {
      arr.sort((a,b)=>emotionsSorted.indexOf(b) - emotionsSorted.indexOf(a))
    }
    return arr
  }

// alternatively...

function sortEmotions(arr, order){ // so this shows that yes, an object couldve been used, and I COULD HAVE DONE THE ORDER CHECK IN THE FKING SORT
    const m = {
      ":D": 1,
      ":)": 2,
      ":|": 3,
      ":(": 4,
      "T_T": 5
    }
    return arr.sort((a,b) => order ? m[a] - m[b] : m[b] - m[a])
  }