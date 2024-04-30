// We want to approximate the length of a curve representing a function y = f(x) with  a <= x <= b. First, we split the interval [a, b] into n sub-intervals with widths h1, h2, ... , hn by defining points x1, x2 , ... , xn-1 between a and b. This defines points P0, P1, P2, ... , Pn on the curve whose x-coordinates are a, x1, x2 , ... , xn-1, b and y-coordinates f(a), f(x1), ..., f(xn-1), f(b) . By connecting these points, we obtain a polygonal path approximating the curve.

// Our task is to approximate the length of a parabolic arc representing the curve y = x * x with x in the interval [0, 1]. We will take a common step h between the points xi: h1, h2, ... , hn = h = 1/n and we will consider the points P0, P1, P2, ... , Pn on the curve. The coordinates of each Pi are (xi, yi = xi * xi).

// The function len_curve (or similar in other languages) takes n as parameter (number of sub-intervals) and returns the length of the curve.

// {image showing step-method for finding curve length, connecting y-points at certain x's}

// Note:
// When you "Attempt" tests are done with a tolerance of 1e-06 (except in PureScript where you must truncate your result to 9 decimal places).


// n numbers of intervals
function lenCurve(n) {
    const h = 1/n
    let length = 0, x1 = 0, x2 = x1+h
    while (Math.round(x2*100000)/100000 <= 1) { // round to get rid of excess super-small values built up that can lead to final x2 exceeding 1 and thus not being counted
      // a^2 + b^2 = c^2
      let a = h // x2 - x1
      let b = (x2 * x2) - (x1 * x1) // y2 - y1
      let c = Math.sqrt((a*a)+(b*b))
      length += c
      x1 += h
      x2 += h
    }
    return length
  }