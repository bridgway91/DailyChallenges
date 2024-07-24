// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.
// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:
// 'taxi' would become 'atix' 'taxis' would become 'atxsi'


function insideOut(x){ // originally tried to get via regex... did not go well, so realized i was being dumb and just used slice
    let arr = x.split(' ')
    arr = arr.map(e=>{
      let front = e.slice(0,Math.floor(e.length/2))
      let back = e.slice(Math.ceil(e.length/2))
      let mid = e.length%2==1 ? e[Math.floor(e.length/2)] : ''
      return front.split('').reverse().join('') + mid + back.split('').reverse().join('')
    })
    return arr.join(' ')
  }