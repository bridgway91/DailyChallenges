// You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:
// a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)
// b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

// Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.


function proofread (str) { // easy problem, maybe could be simplified with regex.. also doensnt work with certain words that were supposed to be spelled with 'ie' (would need multiple replaces with a go-between)
    return str.toLowerCase().replaceAll(/ie/g,'ei').split('. ').map(e=>e[0].toUpperCase()+e.slice(1)).join('. ')
  } 
  
proofread ("ShE deCIeved HiM.");

// alternatively...

proofread = s => s.toLowerCase().replace(/ie/g, 'ei').replace(/(?:\. |^)(.)/g, c => c.toUpperCase()) // yeah... figured regex could handle the second part, but didnt think of trying it at first... without looking it up, i believe the second regex does a positive look-behind for EITHER ". " or the start of the string, and then captures whatever follows that and uppercase's it