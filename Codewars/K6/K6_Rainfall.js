// dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".

// Task:
// function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
// function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.

// Examples:
// mean("London", data), 51.19(9999999999996) 
// variance("London", data), 57.42(833333333374)

// Notes:
// if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)
// Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.
// A ref: http://www.mathsisfun.com/data/standard-deviation.html



function mean(town, strng) { // complicated and a bit annoying, but not too hard, happy it passed tho considering the seeming complexity
    let towns = strng.split('\n').map(e=>e.split(':'))
  //   console.log(towns) // [ [town, month rain] , [town, month rain] , ... ]
    let cities = {}
    towns.forEach(e => {
      cities[e[0]] = e[1].match(/(?:\d)+.(?:\d)/gm).map(e=>Number(e)) // only actually need rainfall nums
    })
  //   console.log(cities) // obj -> { City: [#,#,...] , City: [#,#,...] , ...}
    
    let req = cities[town] // [#,#,...]
    return req ? req.reduce((a,b)=>a+b,0) / req.length : -1
  }
function variance(town, strng) {
    let towns = strng.split('\n').map(e=>e.split(':'))
    let cities = {}
    towns.forEach(e => {
      cities[e[0]] = e[1].match(/(?:\d)+.(?:\d)/gm).map(e=>Number(e)) // only actually need rainfall nums
    })
    let req = cities[town]
    let meanreq = mean(town,strng)
    if (req) {
      let sqrreq = req.map(n=> Math.pow(n - meanreq,2))
      return sqrreq.reduce((a,b)=>a+b,0) / sqrreq.length
    } else {
      return -1
    }
  }


// alternatively...

function mean(town, strng) {
    if (!strng.includes(town+":")) return -1
    let rainfall = strng.split("\n").filter(el=>el.includes(town))[0].match(/\d+\.?\d*/g)
    return rainfall.reduce((a,b)=>a + +b,0)/12
}
function variance(town, strng) {
    if (!strng.includes(town+":")) return -1
    let rainfall = strng.split("\n").filter(el=>el.includes(town))[0].match(/\d+\.?\d*/g)
    let squaredDiffs = rainfall.map(el=>(el-mean(town,strng))**2)
    return squaredDiffs.reduce((a,b)=>a + b,0)/12
}