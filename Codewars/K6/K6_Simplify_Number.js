// Given a positive integer as input, return the output as a string in the following format:
// Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.

// Examples
// Input	Output
// 0	""
// 56	"5*10+6"
// 60	"6*10"
// 999	"9*100+9*10+9"
// 10004	"1*10000+4"
// Note: input >= 0


function simplify(num){ // not too hard, but took some thinking
    let numstr = ''+num
    let tens = 0, res = ''
    for (let i=numstr.length-1; i>=0; i--) {
      if(+numstr[i] > 0) {
        res = (tens ? numstr[i] + '*' + Math.pow(10,tens)
                   : numstr[i])
              + (res ? '+'+res : res)
      }
      tens++
    }
    return res
  }

// or...

function simplify(n){ // wanted to try something like this at first (or maybe that was another problem? dont remember)
    return [...''+n].reduce( (o,c,i,s)=>(c==0 || o.push(i==s.length-1?c:`${c}*${10**(s.length-1-i)}`)) && o, []).join('+');
}