// Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

// Examples:
// var arr = ["BBC1", "BBC2", "MTV"];
// redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
// var arr = ["BBC1", "BBC1", "BBC2", "MTV"];
// redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}


function redarr(arr) { // conceptually easy, until the extended tests were putting 'CNN' before 'Channel #' b/c of capitalization -_- .... so had to figure out how to handle that
    let res = {}
    let a = [...new Set(arr)].sort((a,b)=>{
      let i=0
      while(true) {
        if(a[i] == b[i]) {
          i++
        } else {
          return a.charCodeAt(i) - b.charCodeAt(i)
        }
      }
    })
    a.forEach((e,i)=>res[i] = e)
    return res
  }


// or


function redarr(arr) { // wait.... would just .sort() have worked? ... fking hell...
    return Object.assign({}, Array.from(new Set(arr)).sort());
  }