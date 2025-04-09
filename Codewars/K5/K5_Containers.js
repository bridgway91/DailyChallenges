// A seaport container terminal stores large containers that are eventually loaded on seagoing ships for transport abroad. Containers coming to the terminal by road and rail are stacked at the terminal as they arrive. Seagoing ships carry large numbers of containers. The time to load a ship depends in part on the locations of its containers. The loading time increases when the containers are not on the top of the stacks, but can be fetched only after removing other containers that are on top of them. The container terminal needs a plan for stacking containers in order to decrease loading time. The plan must allow each ship to be loaded by accessing only topmost containers on the stacks, and minimizing the total number of stacks needed. For this problem, we know the order in which ships must be loaded and the order in which containers arrive. Each ship is represented by a capital letter between A and Z (inclusive), and the ships will be loaded in alphabetical order. Each container is labeled with a capital letter representing the ship onto which it needs to be loaded. There is no limit on the number of containers that can be placed in a single stack.

// Input
// Each test case consists of a single string containing from 1 to 1000 capital letters representing the order of arrival of a set of containers. For example, the string ABAC means consecutive containers arrive to be loaded onto ships A, B, A, and C, respectively. When all containers have arrived, the ships are loaded in strictly increasing order: first ship A, then ship B, and so on.

// Output
// For each input case, return the minimum number of stacks needed to store the containers before loading starts.

// Example
// int Containers("A") = return 1;
// int Containers("CBACBACBACBACBA") = return 3;
// int Containers("CCCCBBBBAAAA") = return 1;
// int Containers("CODEWARS") = return 5;


function Containers(input){ // used chatgpt as a 'duck' to talk back and forth with until i understood the trick
    let stacks = []
    for (let ch of input) {
      let placed = false
      for (let i=0; i<stacks.length; i++) {
        if (stacks[i] >= ch) { stacks[i]=ch; placed=true; break }
      }
      if(!placed) { stacks.push(ch) }
    }
    return stacks.length
  }
  /*
  initialize empty array `stacks`  // holds the top letter of each stack
  for each letter `ch` in the input string:
      placed = false
      for i from 0 to length of stacks:
          if stacks[i] >= ch:
              stacks[i] = ch  // place this container on stack i
              placed = true
              break
      if not placed:
          stacks.push(ch)  // start a new stack with this container
  return length of stacks
  */

// or...

function Containers(input){ // basically same concept as mine, but smarter in that its just using findIndex w/ a fn
    var stacks = [];
    input.split('').forEach((letter) => {
      var indexInStacks = stacks.findIndex(x => letter <= x);
      indexInStacks > -1 ? stacks[indexInStacks] = letter : stacks.push(letter);
    });
    return stacks.length;
}