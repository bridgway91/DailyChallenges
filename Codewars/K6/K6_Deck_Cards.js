// Build a deck of playing cards by generating 52 strings representing cards. There are no jokers.

// Each card string will have the format of:
// "ace of hearts"
// "ace of spades"
// "ace of diamonds"
// "ace of clubs"

// And will consist of the following ranks:
// ace two three four five
// six seven eight nine ten
// jack queen king

// They do not need to be in order.

// Additional constraints
// 1 line only!
// buildDeck is a variable holding your deck. It is not a function.


let buildDeck = ['ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king'].map(e=> [e + ' of hearts',e + ' of spades',e + ' of diamonds',e + ' of clubs']).reduce((a,c)=>a.concat(c),[]) // dumb problem, 1 line restriction sucks, bleh