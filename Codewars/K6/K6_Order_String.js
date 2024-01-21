// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){ // inelegant, but gets the job done
    let wordsArr = words.split(' ');
    let newArr = [];
    for (let i=0;i<wordsArr.length;i++){
      if (wordsArr[i].includes('1')) {
        newArr[0] = wordsArr[i];
      } else if (wordsArr[i].includes('2')) {
        newArr[1] = wordsArr[i];
      } else if (wordsArr[i].includes('3')) {
        newArr[2] = wordsArr[i];
      } else if (wordsArr[i].includes('4')) {
        newArr[3] = wordsArr[i];
      } else if (wordsArr[i].includes('5')) {
        newArr[4] = wordsArr[i];
      } else if (wordsArr[i].includes('6')) {
        newArr[5] = wordsArr[i];
      } else if (wordsArr[i].includes('7')) {
        newArr[6] = wordsArr[i];
      } else if (wordsArr[i].includes('8')) {
        newArr[7] = wordsArr[i];
      } else if (wordsArr[i].includes('9')) {
        newArr[8] = wordsArr[i];
      };
    };
    return newArr.join(' ');
}


// alternatively... 

function order(words){ // there's the regex solution i knew was doable
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }

function order(words) {
    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
  }