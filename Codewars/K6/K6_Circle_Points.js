// You have the radius of a circle with the center in point (0,0).
// Write a function that calculates the number of points in the circle where (x,y) - the cartesian coordinates of the points - are integers.
// Example: for radius = 2 the result should be 13.
// 0 <= radius <= 1000

function pointsNumber(radius){ // rather brute-force approach, dont like but didnt seem to be a quick equation for it
    let count = 0
    for (let i=1; i<=radius; i++) {
      for (let j=1; j<=radius; j++) {
        if (i*i+j*j <= radius*radius) count++
      }
    }
    return count*4+radius*4+1
  }


// alternatively...

function pointsNumber(r) { // honestly i cant figure out why this works... and no soln seems to offer an explanation
    let count = 0;
    for (let x = 0; x <= r; x++)
      count += Math.floor(Math.sqrt(r * r - x * x));
    return 4 * count + 1;
  }