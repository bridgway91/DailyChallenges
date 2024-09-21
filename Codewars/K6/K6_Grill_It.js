// A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers.

// Task
// Write a function that accepts two inputs: message and code and returns hidden message decrypted from message using the code.
// The code is a nonnegative integer and it decrypts in binary the message.

// message : abcdef
// code    : 000101
// ----------------
// result  : df


function grille(message, code) { // feels like bad code, but was relatively easy, figured the turn from a raw number to the binary code was easy enough, but then forgot to account for account for situations where the binary form is longer than the message
    const bin = code.toString(2).padStart(message.length,'0')
    message = message.padStart(bin.length,' ')
    let res = ''
    for (let i=0; i<message.length; i++) {
      if(bin[i]=='1') res += message[i]
    }
    return res.trim()
  }
  
// alternatively...

function grille(message, code) { // while i likely wouldve broken up the parts more, i like the approach this one took, just building out the code portion and then smartly slicing it down to the length of the message... also the array build into filter removes the need for a loop like i did.. not sure if overall more efficient but definitely slimmer
    const mask = ('0'.repeat(message.length)+code.toString(2)).slice(-message.length);
    return [...message].filter((c,i)=>+mask[i]).join('');
  }