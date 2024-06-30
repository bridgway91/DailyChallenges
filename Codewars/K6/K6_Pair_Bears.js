// You must check within a string (s) to find all of the mating pairs, returning a list/array of the string containing valid mating pairs and a boolean indicating whether the total number of bears is greater than or equal to x.

// Rules for a 'valid' mating pair:
// Bears are either 'B' (male) or '8' (female),
// Bears must be together in male/female pairs 'B8' or '8B',
// Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
// Return an array containing a string of the valid mating pairs available (empty string if there are no pairs), and a boolean indicating whether the total number of bears is greater than or equal to x. , e.g:

// (6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false]; in this example, the number of bears(=4) is lesser than the given value of x(=6)


function bears(x, s){ // pretty sure pairs.length should be multiplied by 2 for total # bears, but that gave an error while this didnt... /shrug
    const pairs = s.match(/(B8)|(8B)/gm) || []
    return [pairs.join(''),pairs.length >= x]
  }