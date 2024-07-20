// You will be given a number and you will need to return it as a string in expanded form
// For example:
// expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
// expanded_from(1.24); // should return "1 + 2/10 + 4/100"
// expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
// expanded_from(0.04); // should return "4/100"


function expandedForm(num) { // lucky this is so easy, cuz had to solve it twice, since first time the soln didnt fking save
    let n = `${num}`.split('.').map(e=>e.split(''))
    n[0] = n[0].reverse().map((e,i)=>e != '0' ? Math.pow(10,i)*e + '' : '').reverse()
    n[1] = n[1].map((e,i)=> e != '0' ? `${e}/${Math.pow(10,i+1)}` : '')
    return n.flat().filter(e=>e).join(' + ')
  }