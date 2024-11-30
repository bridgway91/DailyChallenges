// Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.
// The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

// Here's an example of the required output:
// const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

// grouped[0]     // [3, 8]
// grouped[1]     // [12, 17, 19]
// grouped[2]     // [25]
// grouped[3]     // [35, 38]
// grouped[4]     // undefined
// grouped[5]     // [50]



function groupIn10s() { // this problem fucking sucked... initial attempts were focused around setting up an array of the needed length, then for each index doing a filter on the arguments for all values above a certain value (index*10) and below another ((index+1)*10)... but FOR SOME FUCKING REASON, THE SECOND COMPARISON WOULD NOT FUCKING WORK.... i dont get it, worked on this for like an hour (not advised) and every method i tried would not work for seemingly no reason, so fucking aggravating... eventually looked over other solns, found some that looked like my answer below and just typed that out (not exact same, but using same method) and it worked fine... shit like this makes me feel like im stupid and cant handle programming, it sucks
    let grouped = []
    for (let i=0; i<arguments.length; i++) {
      let ind = Math.floor(arguments[i]/10)
      grouped[ind] = (grouped[ind] ? grouped[ind] : []).concat([arguments[i]])
      grouped[ind].sort()
    }
    return grouped
  }