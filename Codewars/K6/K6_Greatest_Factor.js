// Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.

// greatestCommonFactor([46, 14, 20, 88]); // --> 2


function greatestCommonFactor(array) { // really easy
    for (let i=Math.min(...array); i>0; i--) {
      if(array.every(e=>e%i == 0)) return i
    }
  };


// alternatively...


function greatestCommonFactor(ar){ // honestly i dont really understand it, but mine seems simple enough already, so not worried over it
	const gcf = (a,b) => !b ? a : gcf(b, a%b);
	return ar.reduce((a,e) => gcf(a,e));
}