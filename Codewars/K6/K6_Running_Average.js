// Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;


function runningAverage() { // actually surprised and happy i got this on first try (sorta, had to adjust for decimal length)
    let nums = []
    return (arg) => {
      nums.push(arg)
      return +(nums.reduce((a,c)=>a+c,0) / nums.length).toFixed(2)
    }
  }