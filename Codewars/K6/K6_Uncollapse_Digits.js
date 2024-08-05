// You will be given a string of English digits "stuck" together, like this:
// "zeronineoneoneeighttwoseventhreesixfourtwofive"
// Your task is to split the string into separate digits:
// "zero nine one one eight two seven three six four two five"

// Examples
// "three"              -->  "three"
// "eightsix"           -->  "eight six"
// "fivefourseven"      -->  "five four seven"
// "ninethreesixthree"  -->  "nine three six three"
// "fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"


function uncollapse(digits){ // VERY brute-forcy... but it works
    return digits
      .replaceAll('one','one ')
      .replaceAll('two','two ')
      .replaceAll('three','three ')
      .replaceAll('four','four ')
      .replaceAll('five','five ')
      .replaceAll('six','six ')
      .replaceAll('seven','seven ')
      .replaceAll('eight','eight ')
      .replaceAll('nine','nine ')
      .replaceAll('zero','zero ').trim()
  }


// alternatively...

function uncollapse(digits){ // fuck me, this is much nicer
    return digits.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/gm,'$1 ').trim();
  }