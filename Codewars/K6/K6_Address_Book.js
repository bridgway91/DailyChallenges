// Given a string with friends to visit in different states:
// "John Daggett, 341 King Road, Plymouth MA
// Alice Ford, 22 East Broadway, Richmond VA
// Sal Carpenter, 73 6th Street, Boston MA"
// we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

// Massachusetts
// ..... John Daggett 341 King Road Plymouth Massachusetts
// ..... Sal Carpenter 73 6th Street Boston Massachusetts
//  Virginia
// ..... Alice Ford 22 East Broadway Richmond Virginia

// The resulting string (when not printed) will be: (or \r\n in place of \n)
// "Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"

// Notes
// There can be a blank last line in the given string of addresses.  (<-- sooo annoying!)
// The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.


function byState(str) { // this problem sucked
    const states = {
      'AZ': 'Arizona',
      'CA': 'California',
      'ID': 'Idaho',
      'IN': 'Indiana',
      'MA': 'Massachusetts',
      'OK': 'Oklahoma',
      'PA': 'Pennsylvania',
      'VA': 'Virginia'
    }
  
    let sorted = str.replace(/,/g,'')
                    .split('\n').filter(e=>e)
                    .sort((a,b)=>a.localeCompare(b))
                    .sort((a,b)=>a.slice(-2).localeCompare(b.slice(-2)))
                    .map(e=>'..... '+e)
    
    sorted.unshift(states[sorted[0].slice(-2)])
  
    for (let i=2; i<sorted.length; i++) {
      let match = sorted[i].slice(-2) == sorted[i-1].slice(-2)
      if(!match) {
        sorted.splice(i,0,' '+states[sorted[i].slice(-2)])
        i++
      }
    }
  
    sorted = sorted.map(e=>{
      const st = e.slice(-2)
      return states[st] ? e.slice(0,-2) + states[st] : e
    })
  
    return sorted.join('\r\n')
  }