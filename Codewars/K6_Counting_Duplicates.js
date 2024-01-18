// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){ // seemed easy enough, but still surprised it worked right away
    let arr = text.toLowerCase().split('')
    let count = 0
    while (arr.length) {
      let char = arr.filter(e=>e==arr[0])
      if (char.length > 1) count++
      arr = arr.filter(e=>e!=arr[0])
    }
    return count
  }


// alternatively...

const duplicateCount = (string) => { // cool idea to just sort the array after splitting input
    
    // makes an array all lowercase and sorts the array in alpha order for easy comparrison
    let newString = string.toLowerCase().split('').sort();
    
    // this array will house the duplicated values so we can 
    // get the length of it (or the number of duplicated characters). 
    let newArray = []
    
    // set a loop for the array
    for(i = 0; i < newString.length; i++){
       // if the current element equals the following element the push it to the new array AND
       // ONLY if the new array doesn't already include the current element
       if(newString[i] === newString[i + 1] && !newArray.includes(newString[i])){
           // push elements to new array
           newArray.push(newString[i])
       }
    }
    // return the number of elements in the array to represent the number characters that were duplicated
    return newArray.length
}


function duplicateCount(text){ // so this one seemed confusing at first till i read a comment on it... it wants to return a count for each val where the current index is NOT equal to first found, but IS equal to the last found, this avoids counting every instance after the first one and only adds to the count when the last instance is found ... but seems like it would take longer to process than other methods (according to some comments)
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }