// In this country soldiers are poor but they need a certain level of secrecy for their communications so, though they do not know Caesar cypher, they reinvent it in the following way.
// The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet. This displacement of a number of places is called the "shift" or the "rotate" of the message. For example, if the shift is 1 letter a becomes b and A becomes B; the shift is cyclic so, with a shift of 1, z becomes a and Z becomesA.
// They use ASCII, without really knowing it, but code only letters a-z and A-Z. Other characters are kept such as.

// They change the "rotate" each new message. This "rotate" is a prefix for their message once the message is coded. The prefix is built of 2 letters, the second one being shifted from the first one by the "rotate", the first one is the first letter, after being downcased, of the uncoded message.
// For example if the "rotate" is 2, if the first letter of the uncoded message is 'J' the prefix should be 'jl'.

// To lessen risk they cut the coded message and the prefix in five pieces since they have only five runners and each runner has only one piece.
// If possible the message will be evenly split between the five runners; if not possible, parts 1, 2, 3, 4 will be longer and part 5 shorter. The fifth part can have length equal to the other ones or shorter. If there are many options of how to split, choose the option where the fifth part has the longest length, provided that the previous conditions are fulfilled. If the last part is the empty string don't put this empty string in the resulting array.
// For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string and is not kept.

// Could you ease them in programming their coding?

// Example with shift = 1 :
// message : "I should have known that you would have a perfect answer for me!!!"
// code : => ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]

// By the way, maybe could you give them a hand to decode?


const alph = 'abcdefghijklmnopqrstuvwxyz' // so i mostly copied my code from previous cipher challenge and edited a bit to make work here... probably not ideal for this problem, but w/e
function encodeStr(s, shift) {
  let a = s.split('').map(e=>{
    let caps = e == e.toUpperCase() // boolean
    if(alph.includes(e.toLowerCase())) {
      let curInd = alph.indexOf(e.toLowerCase())
      let newInd = (curInd + shift) % 26
      return caps ? alph[newInd].toUpperCase() : alph[newInd]
    } else {
      return e
    }
  }).join('')
  let pre = s[0].toLowerCase() + alph[(alph.indexOf(s[0].toLowerCase())+shift)%26]
  a = pre + a
  let size = Math.ceil(a.length / 5)
  let res = [a.slice(0*size,1*size),a.slice(1*size,2*size),a.slice(2*size,3*size),a.slice(3*size,4*size),a.slice(4*size,5*size)]
  while(res[res.length-1] == '') {
    res.pop()
  }
  return res
}
function decode(arr) {
  let s = arr.join('')
  let shift = alph.indexOf(s[1]) - alph.indexOf(s[0])
  let b = s.slice(2).split('').map(e=>{
    let caps = e == e.toUpperCase() // boolean
    if(alph.includes(e.toLowerCase())) {
      let curInd = alph.indexOf(e.toLowerCase())
      let newInd = (curInd - shift + 260) % 26
      return caps ? alph[newInd].toUpperCase() : alph[newInd]
    } else {
      return e
    }
  }).join('')

  return b
}