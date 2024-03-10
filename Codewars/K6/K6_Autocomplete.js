// It's time to create an autocomplete function! Yay!
// The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

// Example:
// autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']

// For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

// For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

// Important note:
// Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".


function autocomplete(input, dictionary){ // was simple enough, most trouble was with dealing with the website itself
    let sort = input.match(/[a-zA-Z]/gm).join('')
    let matches = []
    for (let i of dictionary) {
      if (i.slice(0,sort.length).toLowerCase() == sort.toLowerCase()) {
        matches.push(i)
      } // point i read somewhere else is that time-wise itd be best to add in a cut-off for when return exceeds 5 values, rather than iterating through the whole dictionary and only THEN cutting off the first 5
    }
    return matches.slice(0,5)
  }


// alternatively...

function autocomplete(input, dictionary){ // dont fully understand this one, but its listed as most clever and best practice, so /shrug
    var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
    return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
  }


function autocomplete(input, dictionary){ // easy enough, rather than pushing to a new array just filters existing dictionary according to needs
    input = input.toLowerCase().replace(/[^a-z]/g, '');
    return dictionary.filter(function (x) {
      return x.slice(0, input.length).toLowerCase() == input;
    }).slice(0, 5);
  }