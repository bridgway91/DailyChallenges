// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.
// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

function countRepeats(str) { // super easy
    const slim = str.split('').filter((e,i,a)=>e != a[i-1])
    return str.length - slim.length
  }

// alternatively...

function countRepeats(str) { // regex version... figured it was doable, but wasnt sure how
    return (str.match(/(.)(?=\1)/g) || []).length
  }