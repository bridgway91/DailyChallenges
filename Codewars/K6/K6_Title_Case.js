// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


function titleCase(title, minorWords) { // DONE... did not real all instructions, apparently second parameter is optional, so need to check for it when assigning variables ('except')
    if (!title) return '';
    let splitTitle = title.toLowerCase().split(' ');
    let except = minorWords ? minorWords.toLowerCase().split(' ') : [''];
    for (let i=0; i<splitTitle.length; i++) {
      if (i == 0) {
        let lowfirst = splitTitle[i].split('');
        lowfirst[0] = lowfirst[0].toUpperCase();
        let capfirst = lowfirst.join('');
        splitTitle[i] = capfirst;
      } else {
        if (except.includes(splitTitle[i])) {
          splitTitle[i] = splitTitle[i].toLowerCase();
        } else {
          let lowword = splitTitle[i].split('');
          lowword[0] = lowword[0].toUpperCase();
          let capword = lowword.join('');
          splitTitle[i] = capword;
        }
      }
    };
    return splitTitle.join(' ')
  }
  