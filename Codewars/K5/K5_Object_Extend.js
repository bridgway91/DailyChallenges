// Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.
// The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.
// Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

// extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
// extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
// extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
// extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}


var extend = function() { // pretty easy
    let obj = {}
    let args = [...arguments]
  
    args.forEach(o=>{
      if(isObject(o)) {
        for (let k of Object.keys(o)) {
          if(!Object.keys(obj).includes(k)) { obj[k] = o[k] }
        }
      }
    })
    
    return obj
  }

// or...

const extend = function(...args) {
    const result = args
        .reverse() // reverse so original declaration is final replacement
        .reduce((acc, next) => {
            return typeof next === 'object' // guess same as isObject
                ? Object.assign(acc, next) // guess same as acc[next] = obj[next] ???
                : acc;
        }, {});
    return result;
}