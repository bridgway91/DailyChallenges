// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){ // holy shit simple, but woke up half hour before midnight, so good to get this done quick
    return a.every(el=>el<=limit);
   }