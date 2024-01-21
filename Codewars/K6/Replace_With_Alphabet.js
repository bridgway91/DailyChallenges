// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) { // this was annoying
    let textSplit = text.toLowerCase().split('');
    let numStr = [];
    for (let i = 0; i < textSplit.length; i++) {
      if (textSplit[i] == 'a') {
        numStr.push('1');
      } else if (textSplit[i] == 'b') {
        numStr.push('2');
      } else if (textSplit[i] == 'c') {
        numStr.push('3');
      } else if (textSplit[i] == 'd') {
        numStr.push('4');
      } else if (textSplit[i] == 'e') {
        numStr.push('5');
      } else if (textSplit[i] == 'f') {
        numStr.push('6');
      } else if (textSplit[i] == 'g') {
        numStr.push('7');
      } else if (textSplit[i] == 'h') {
        numStr.push('8');
      } else if (textSplit[i] == 'i') {
        numStr.push('9');
      } else if (textSplit[i] == 'j') {
        numStr.push('10');
      } else if (textSplit[i] == 'k') {
        numStr.push('11');
      } else if (textSplit[i] == 'l') {
        numStr.push('12');
      } else if (textSplit[i] == 'm') {
        numStr.push('13');
      } else if (textSplit[i] == 'n') {
        numStr.push('14');
      } else if (textSplit[i] == 'o') {
        numStr.push('15');
      } else if (textSplit[i] == 'p') {
        numStr.push('16');
      } else if (textSplit[i] == 'q') {
        numStr.push('17');
      } else if (textSplit[i] == 'r') {
        numStr.push('18');
      } else if (textSplit[i] == 's') {
        numStr.push('19');
      } else if (textSplit[i] == 't') {
        numStr.push('20');
      } else if (textSplit[i] == 'u') {
        numStr.push('21');
      } else if (textSplit[i] == 'v') {
        numStr.push('22');
      } else if (textSplit[i] == 'w') {
        numStr.push('23');
      } else if (textSplit[i] == 'x') {
        numStr.push('24');
      } else if (textSplit[i] == 'y') {
        numStr.push('25');
      } else if (textSplit[i] == 'z') {
        numStr.push('26');
      };
    }
    return numStr.join(' ');
  }


// alternatively...

function alphabetPosition(text) { // i should learn charcode...
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }

function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return text.toLowerCase()
        .split('')
        .filter(t => letters.indexOf(t) > -1)
        .map(t => letters.indexOf(t)+1 || '')
        .join(' ');
  }