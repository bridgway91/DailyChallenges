// Your task is to write the word to number converter. Digits in the number should match letters in the word. Plus generated number should be the smallest possible number you can get.
// Words will contain of maximum 10 distinct letters, but word can be any length, even longer than 10 characters long.
// Number can NOT start with 0
// Same letters share the same digit regardless of case
// For empty string return 0

// Examples:
// "A" -> 1 - OK
// "ABA" -> 353 - WRONG ( number is OK, but it's not the smallest number )
// "ABA" -> 333 - WRONG ( different letters map to same digits )
// "ABA" -> 357 - WRONG ( same letters map to different digits )


function convert(s) { // started doing this at work and was having some trouble, getting back to it at home and realized some misunderstandings i had while at work... after correcting that, it was pretty simple ... notably dont think this addresses the 'if empty return 0' requirement, but guess that wasnt tested for! (and its a simple 1-line inclusion anyway)
    let letters1 = [...new Set(s.toLowerCase())]
    let letters2 = [letters1[1],letters1[0],...letters1.slice(2)]
  
    return +s.toLowerCase().split('').map(e=>letters2.indexOf(e)).join('')
  }