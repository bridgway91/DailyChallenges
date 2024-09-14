// A linear regression line has an equation in the form Y=a+bX, where X is the explanatory variable and Y is the dependent variable. The parameter b represents the slope of the line, while a is called the intercept (the value of y when x=0).

// The function that you have to write accepts two list/array, x and y, representing the coordinates of the points to regress (so that, for example, the first point has coordinates (x[0], y[0])).

// Your function should return a tuple (in Python) or an array (any other language) of two elements: a (intercept) and b (slope) in this order.

// You must round your result to the first 4 decimal digits

// Formula:

// xi and yi is x and y co-ordinate of i-th point; n is length of input.
// a = (sum(xi^2)*sum(yi) - sum(xi)*sum(xi*yi)) / (n*sum(xi^2) - sum(xi)^2)
// b = (n*sum(xi*yi) - sum(xi)*sum(yi)) / (n*sum(xi^2) - sum(xi)^2)

// Examples:
// regression_line([25,30,35,40,45,50], [78,70,65,58,48,42]) === [114.381, -1.4457]

// regressionLine([56,42,72,36,63,47,55,49,38,42,68,60], [147,125,160,118,149,128,150,145,115,140,152,155]) === [80.7777, 1.138]


function regression_line(x,y){ // easy problem, just basically copy the given equation
    const aTop = (sum(x.map(e=>e*e)) * sum(y)) - (sum(x) * sum(x.map((e,i)=>e*y[i])))
    const bTop = (x.length * sum(x.map((e,i)=>e*y[i]))) - (sum(x) * sum(y))
    const bot = (x.length * sum(x.map(e=>e*e))) - Math.pow(sum(x),2)
  
    return [+(aTop/bot).toFixed(4),+(bTop/bot).toFixed(4)]
  }
function sum(arr){
    return arr.reduce((a,b)=>a+b,0)
  }