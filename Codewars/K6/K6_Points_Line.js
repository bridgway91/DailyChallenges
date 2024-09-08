// Given some points (cartesian coordinates), return true if all of them lie on a line. Treat both an empty set and a single point as a line.

// onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
// onLine([[1,2], [-3, -14], [22, 9]]);              // returns false


function onLine(points) { // i thought this would be easy... but NOOOOO, FKING NUMBERS HAVE TO EXACTLY MATCH, GIVING ME A FKING HEADACHE
    if(points.length <= 2) return true
    if(points.every(p=>p[0]==points[0][0])) return true // if vertical line
    if(points.every(p=>p[1]==points[0][1])) return true // if horizontal line
    
    let i=1
    while(points[i][0] == points[0][0] && points[i][1] == points[1][1]) {
      i++
    }
    const m = (points[i][1] - points[0][1]) / (points[i][0] - points[0][0])
    const b = points[0][1] - m*points[0][0]
    
    points = points.map(p=>Math.abs(p[1] - (p[0]*m +b)) < 0.01)
  
    return points.every(e=>e)
  }

// alternatively...

function collinear([[x1, y1], [x2, y2], [x3, y3]]) { // idk man, my brain is fried
    return (x2 - x1) * (y3 - y2) == (y2 - y1) * (x3 - x2);
  }
function onLine(points) {
    return Array.from({length: points.length - 2}).fill()
      .every((_, i) => collinear(points.slice(i, i + 3)));
  }
// or
function isThreePointsOnLine(a, b, c) {
    return (a[0] * (b[1] - c[1]) + 
            b[0] * (c[1] - a[1]) +
            c[0] * (a[1] - b[1]))/2 == 0; // if area of triangle made of this 3 points equals zero, 
                                          // they on the same line
}
function onLine(points) {
    for(let i = 0; i < points.length - 2; i++) {
      if(!isThreePointsOnLine(points[i], points[i+1], points[i+2])) {
        return false;
      }
    }
    return true;
}