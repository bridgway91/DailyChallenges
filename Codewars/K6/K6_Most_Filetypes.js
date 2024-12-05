// You've been working with a lot of different file types recently as your interests have broadened.
// But what file types are you using the most? With this question in mind we look at the following problem.

// Given a List/Array of Filenames (strings) files return a List/Array of string(s) containing the most common extension(s). If there is a tie, return a sorted list of all extensions.

// Important Info:
    // Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
    // Filenames and extensions will only contain letters (case sensitive), and numbers.
    // If a file has multiple extensions (ie: mysong.mp3.als) only count the last extension (.als in this case)

// Examples
// files = ['Lakey - Better days.mp3', 
//          'Wheathan - Superlove.wav', 
//          'groovy jam.als', 
//          '#4 final mixdown.als', 
//          'album cover.ps', 
//          'good nights.mp3']
// would return: ['.als', '.mp3'], as both of the extensions appear two times in files.
// files = ['Lakey - Better days.mp3', 
//          'Fisher - Stop it.mp3', 
//          'Fisher - Losing it.mp3', 
//          '#4 final mixdown.als', 
//          'album cover.ps', 
//          'good nights.mp3']
// would return ['.mp3'], because it appears more times then any other extension, and no other extension has an equal amount of appearences.


function solve(files) { // again, not too bad, important realizations are that .keys() and .values() are not methods for each and every object, but are from the greater Object, taking in a specified object as an argument... also that .sort() applies to the original even when done in a console.log(), =\
    let types = files.map(e=>e.match(/\.\w+$/gm)[0]).sort() // sort should be done at the end, also... particularly after a filter has been done
  
    let howmany = {}
    for (let e of types) {
      howmany[e] = howmany[e] ? howmany[e]+1 : 1
    }
  
    return Object.keys(howmany).filter(e=>howmany[e] == Math.max(...Object.values(howmany)))
  }


// or

function solve(files) { // fking tried to do that first part, reducing an array to an object, in mine and it didnt work
    let total = files.map(file => file.match(/\.\w+$/)[0]).reduce((acc,cur) => (acc[cur] = (acc[cur]||0) + 1, acc), {});
    let max = Math.max(...Object.values(total));
    return Object.keys(total).sort().filter(key => total[key] == max);
  }