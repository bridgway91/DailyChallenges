// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:
// Math.round()
// Math.ceil()
// Math.floor()


Math.round = function(number) { // super easy
    let n = String(number).split('.')
    if(!n[1]) return +n[0]
    return n[1][0] > 4 ? +n[0] + 1 : +n[0];
  };
  
  Math.ceil = function(number) {
    let n = String(number).split('.')  
    return n[1] ? +n[0] + 1 : +n[0];
  };
  
  Math.floor = function(number) {
    let n = String(number).split('.')
    return +n[0];
  };

// or

Math.round = function(number) { // admittedly nicer than mine, but w/e
    return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
  };
Math.ceil = function(number) {
    return (parseInt(number) === number) ? number : parseInt(number) + 1;
  };
Math.floor = function(number) {
    return parseInt(number);
  };