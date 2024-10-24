// The walker starts from point O, walks along OA, AB and BC. When he is in C (C will be in the upper half-plane), what is the distance CO? What is the angle tOC in positive degrees, minutes, seconds?
// Angle tOA is alpha (here 45 degrees), angle hAB is beta (here 30 degrees), angle uBC is gamma(here 60 degrees).

// Task
// function solve(a, b, c, alpha, beta, gamma) with parameters
// a, b, c: positive integers in units of distance (stand for OA, AB, BC)
// alpha, beta, gamma: positive integers in degrees (positive angles are anticlockwise)

// returns an array:
// first element: distance CO (rounded to the nearest integer)
// then angle tOC with the third following elements:
// second element of the array: number of degrees in angle tOC (truncated positive integer)
// third element of the array: number of minutes in angle tOC (truncated positive integer)
// fourth element of the array: number of seconds in angle tOC (truncated positive integer)

// Example:
// print(solve(12, 20, 18, 45, 30, 60)) -> [15, 135, 49, 18]
// - CO is 14.661... rounded to 15
// - angle tOC is 135.821...
// so
// - degrees = 135
// - minutes = 49.308...
// - seconds = 18.518...
// hence [15, 135, 49, 18]


function solve(a, b, c, alpha, beta, gamma) { // real drawn out, but also real simple, just took some time to get it all down
    alpha = alpha * (Math.PI / 180)
    beta = beta * (Math.PI / 180)
    gamma = gamma * (Math.PI / 180)
    
    const A = [a * Math.cos(alpha), a * Math.sin(alpha)]
    const B = [A[0] - b * Math.sin(beta), A[1] + b * Math.cos(beta)]
    const C = [B[0] - c * Math.cos(gamma), B[1] - c * Math.sin(gamma)]
  
    const CO = Math.round(Math.sqrt(C[0]*C[0] + C[1]*C[1]))
    const COangle = 180 - (Math.atan(Math.abs(C[1]/C[0])) * (180 / Math.PI))
    const COdeg = Math.floor(COangle)
    const COmin = Math.floor((COangle - COdeg) * 60)
    const COsec = Math.floor((((COangle - COdeg) * 60) - COmin) * 60)
  
    return [CO, COdeg, COmin, COsec]
  }