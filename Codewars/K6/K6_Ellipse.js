// Based on the received dimensions, a and b, of an ellipse, calculare its area and perimeter.

// Example:
// Input: elipse(5,2)
// Output: "Area: 31.4, perimeter: 23.1"
// Note: The perimeter approximation formula you should use: π * (3/2(a+b) - sqrt(ab))


function elipse(a,b){ // easy prob, perimeter form is not standard but w/e
    const area = Math.PI * a * b
    const peri = Math.PI * (1.5*(a+b) - Math.sqrt(a*b))
    return `Area: ${area.toFixed(1)}, perimeter: ${peri.toFixed(1)}`
  }