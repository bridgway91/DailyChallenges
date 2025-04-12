// It is the middle of the night.
// You are jet-lagged from your long cartesian plane trip, and find yourself in a rental car office in an unfamiliar city.
// You have no idea how to get to your hotel.
// Oh, and it's raining.
// Could you be any more miserable?
// But the friendly rental-car dude behind the desk says not to worry! He kindly pre-programs the car Sat Nav system with your destination. He smiles and assures you that the device works OK. What excellent service! What a nice man!
// Maybe things are not so bad after all.
// Then he sniggers...

// City streets
// The city extends as far as the eye can see in all directions, and is laid out as a giant grid where all blocks are 1km across.
// Notice that [x,y] coordinates are described with units of 100m
// ((satnav city streets image))

// Kata task
// Your starting point is [0,0]
// Simply follow the Sat Nav directions!
// When you arrive at the destination return the final [x,y] coordinates.

// Sat Nav directions
// The device gives directions as text messages:
// The first message
// Head <NORTH,EAST,SOUTH,WEST>
// The en-route messages
// Take the <NEXT,2nd,3rd,4th,5th> <LEFT,RIGHT>
// Go straight on for <100,200,300,...,900>m
// Go straight on for <1.0,1.1,1.2,...,5.0>km
// Turn around!
// The last message
// You have reached your destination!

// NOTES
// First and last messages are always present
// There may be any number of en-route messages
// Messages are always formatted corrrectly
// A NEXT turn message means you must to proceed to the next cross-street even if you are currently at an intersection
// But Turn around does not need to be done at an intersection. Just do a U-turn wherever you are!

// Good Luck!


function satNav(directions) { // NOT CORRECT... fuck this problem, initial submission got most of the way, was only slightly off, asked chatGPT for help, and results from there just got further and further from the expected results, so frustrating, never managed to solve
    const cardinals = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    const turnMap = { 'NEXT': 1, '2nd': 2, '3rd': 3, '4th': 4, '5th': 5 };
    let loc = [0, 0]; // [x, y] in 100m units
    let dir = 0;      // 0=N, 1=E, 2=S, 3=W
    for (let d of directions) {
      if (d.startsWith('Head')) {
        dir = cardinals.indexOf(d.slice(5));
      } else if (d.startsWith('Take')) {
        const parts = d.split(' ');
        const intersections = turnMap[parts[2]];
        const turnDir = parts[3];
        // Move N blocks (1 block = 10 units)
        const moveUnits = intersections * 10;
        if (dir === 0) loc[1] += moveUnits;
        if (dir === 1) loc[0] += moveUnits;
        if (dir === 2) loc[1] -= moveUnits;
        if (dir === 3) loc[0] -= moveUnits;
        // Then turn
        dir = turnDir === 'LEFT' ? (dir + 3) % 4 : (dir + 1) % 4;
      } else if (d.startsWith('Go')) {
        const parts = d.split(' ');
        const distStr = parts[4];
        const isKm = distStr.endsWith('km');
        const value = parseFloat(distStr);
        const moveUnits = isKm ? value * 10 : value / 0.1;
        if (dir === 0) loc[1] += moveUnits;
        if (dir === 1) loc[0] += moveUnits;
        if (dir === 2) loc[1] -= moveUnits;
        if (dir === 3) loc[0] -= moveUnits;
      } else if (d.startsWith('Turn')) {
        dir = (dir + 2) % 4; // U-turn
      }
    }
    // Round to nearest 100m unit (i.e., integer)
    return loc.map(n => Math.round(n));
  }
  

// or...

function satNav(directions) { // created functions for each type of movement, smart, like this soln
    //using units of 100m
    let x = 0;
    let y = 0;
    let heading = directions[0].match(/NORTH|SOUTH|EAST|WEST/)[0];
    function turnAround() {
      switch (heading) {
        case 'NORTH': heading = 'SOUTH'; break;
        case 'SOUTH': heading = 'NORTH'; break;
        case 'WEST': heading = 'EAST'; break;
        case 'EAST': heading = 'WEST'; break;
      }
    }
    function turn(dist, dir) {
      switch (heading) {
        case 'NORTH': 
          y = Math.floor((y + dist)/10) * 10;
          if (dir == 'RIGHT') heading = 'EAST'
            else heading = 'WEST';
          break;
        case 'SOUTH': 
          y = Math.ceil((y - dist)/10) * 10;
          if (dir == 'RIGHT') heading = 'WEST'
            else heading = 'EAST';
          break;
        case 'WEST': 
          x = Math.ceil((x - dist)/10) * 10;  
          if (dir == 'RIGHT') heading = 'NORTH'
            else heading = 'SOUTH';
          break;
        case 'EAST': 
          x = Math.floor((x + dist)/10) * 10;  
          if (dir == 'RIGHT') heading = 'SOUTH'
            else heading = 'NORTH';
          break;
      }
    }
    function goStraight(dist) {
      switch (heading) {
        case 'NORTH': y += dist; break;
        case 'SOUTH': y -= dist; break;
        case 'WEST': x -= dist; break;
        case 'EAST': x += dist; break;
      }
    }
    for (let i = 1; i < directions.length - 1; i++) {
      //determine the type of instruction (there are three types, first word differs)
      switch (directions[i].split(' ')[0]) {
        case 'Turn': 
          turnAround();
          break;
        case 'Take':
          let dist = directions[i].match(/NEXT|\d/)[0];
          if (dist == 'NEXT') dist = 1;
          let dir = directions[i].match(/LEFT|RIGHT/)[0];
          turn(dist * 10, dir);
          break;
        case 'Go': 
          let strDist = directions[i].match(/\d+\.\d*(?=km)/);
          if (strDist !== null) strDist = Number(strDist[0]) * 10
          else {
            strDist = directions[i].match(/\d+(?=m)/);
            if (strDist !== null) strDist = Number(strDist[0]) / 100;
          }
          goStraight(strDist);
          break;
        }
    }
    return [x, y];
  }