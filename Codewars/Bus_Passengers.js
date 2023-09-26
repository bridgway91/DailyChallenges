// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){ // really happy i remembered the syntax used in the forEach method... know i saw it in some previous challenge and tried to implement it here. forgot parentheses around the [a,b] at first, but figured it out
    let passengers = 0;
    busStops.forEach(([a,b]) => {
      passengers = passengers + a - b;
      if (passengers < 0) passengers = 0; // misread instructions, didnt need this line, oops
    });
    return passengers;
  }


// alternatively...

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0); // there's the one-liner i knew was possible
