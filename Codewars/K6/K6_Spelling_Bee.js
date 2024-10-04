// How many bees are in the beehive?
// bees can be facing UP, DOWN, LEFT, or RIGHT
// bees can share parts of other bees

// Ex1
// bee.bee     
// .e..e..
// .b..eeb
// Answer: 5

// Ex2
// bee.bee     
// e.e.e.e
// eeb.eeb
// Answer: 8

// Notes
// The hive may be empty or null/None/nil/...


const howManyBees = function(hive) { // this was kinda annoying, test naturally had the hive all split up, which made initial looks confusing, but overall once i got the rows setup, just did a transform to get the 'columns' and then counted instances in each
    if(hive == null) return 0
    if(!hive.length) return 0
    const rows = hive.map(e=>e.join(''))
    const cols = []
    for (let i=0; i<hive[0].length; i++) {
      let str = ''
      for (let j=0; j<hive.length; j++) {
        str += hive[j][i]
      }
      cols.push(str)
    }
  
    const rowCount = rows.map(e=>(e.match(/bee/g) || '').length + (e.match(/eeb/g) || '').length)
    const colCount = cols.map(e=>(e.match(/bee/g) || '').length + (e.match(/eeb/g) || '').length)
    
    return rowCount.reduce((a,b)=>a+b) + colCount.reduce((a,b)=>a+b)
  }


// alternatively...


howManyBees = function(hive) { // neat, dont fully grasp how the flip works, but understand that it does, then text just combines the standard with the flipped (so rows+columns), and bees finds all the matches, which i had trouble getting in a single match considering the sharing of parts, but i guess it wasnt a big deal
    if (!hive || !hive.length) 
      return 0;
    
    let flip = hive[0].map((_, i) => hive.map(row => row[i]));  
    let text = hive.concat(flip).map(row => row.join('')).join('|');
    let bees = text.match(/(?=bee|eeb)/g) || [];
    
    return bees.length;
  }