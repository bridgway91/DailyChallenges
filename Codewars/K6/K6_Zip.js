// Let's implement the zipObject function that enables such results
// zipObject(['fred', 'barney'], [30, 40])
// => { 'fred': 30, 'barney': 40 }
// zipObject([['fred', 30], ['barney', 40]])
// => { 'fred': 30, 'barney': 40 }

// The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

// If only keys are given, then set the values to undefined.
// zipObject(['fred', 'barney'])
// { fred: undefined, barney: undefined }
// If neither keys nor values are specified, then return {}
// zipObject()
// {}


function zipObject(keys, values) { // thought there might be some issue going in that would make it much harder, but nope, was relatively simple
    let o = {}
  
    if(keys && !values) {
      for (let e of keys) {
        o[e[0]] = e[1]
      }
    } else {
      for (let i=0; i<keys.length; i++) {
        o[keys[i]] = values[i]
      }
    }
    
    return o
  }