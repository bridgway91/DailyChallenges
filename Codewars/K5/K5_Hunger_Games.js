// A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...
// All the animals are out and some of them are eating each other!
// It's a Zoo Disaster!

// Here is a list of zoo animals, and what they can eat
// antelope eats grass
// big-fish eats little-fish
// bug eats leaves
// bear eats big-fish
// bear eats bug
// bear eats chicken
// bear eats cow
// bear eats leaves
// bear eats sheep
// chicken eats bug
// cow eats grass
// fox eats chicken
// fox eats sheep
// giraffe eats leaves
// lion eats antelope
// lion eats cow
// panda eats leaves
// sheep eats grass
// Kata Task

// INPUT
// A comma-separated string representing all the things at the zoo
// TASK
// Figure out who eats whom until no more eating is possible.
// OUTPUT
// A list of strings (refer to the example below) where:
// The first element is the initial zoo (same as INPUT)
// The last element is a comma-separated string of what the zoo looks like when all the eating has finished
// All other elements (2nd to last-1) are of the form X eats Y describing what happened

// Notes
// Animals can only eat things beside them
// Animals always eat to their LEFT before eating to their RIGHT
// Always the LEFTMOST animal capable of eating will eat before any others
// Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible

// Example
// Input
// "fox,bug,chicken,grass,sheep"
// 1	fox can't eat bug	
// "fox,bug,chicken,grass,sheep"
// 2	bug can't eat anything	
// "fox,bug,chicken,grass,sheep"
// 3	chicken eats bug	
// "fox,chicken,grass,sheep"
// 4	fox eats chicken	
// "fox,grass,sheep"
// 5	fox can't eat grass	
// "fox,grass,sheep"
// 6	grass can't eat anything	
// "fox,grass,sheep"
// 7	sheep eats grass	
// "fox,sheep"
// 8	fox eats sheep	
// "fox"
// Output
// ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]


const eats = { // FAILED, NOT RIGHT ANSWER... could not solve in a decent time-frame, head not in right space to solve
    'antelope': ['grass'],
    'big-fish': ['little-fish'],
    'bug': ['leaves'],
    'bear': ['big-fish','bug','chicken','cow','leaves','sheep'],
    'chicken': ['bug'],
    'cow': ['grass'],
    'fox': ['chicken','sheep'],
    'giraffe': ['leaves'],
    'lion': ['antelope','cow'],
    'panda': ['leaves'],
    'sheep': ['grass']
  }
var whoEatsWho = function(zoo) {
    let res = [zoo]
    console.log(eats, zoo)
    let spl = zoo.split(','), ind = 0
    while(spl.some((e,i)=>eats[e].includes(spl[i-1]) || eats[e].includes(spl[i+1]))) {
      // when there is something to eat...
      if(!eats[spl[ind]]) {ind++; continue}
      if(eats[spl[ind]].includes(spl[ind-1])) {
        res.push(`${spl[ind]} eats ${spl[ind-1]}`)
        spl = spl.filter((e,i)=>i!=ind)
        ind = 0
      } else if (eats[spl[ind]].includes(spl[ind+1])) {
        res.push(`${spl[ind]} eats ${spl[ind+1]}`)
        spl = spl.filter((e,i)=>i!=ind)
        ind = 0
      } else {
        ind++
      }
    }
    console.log(res, spl)
  }
  

// or


var whoEatsWho = function(zoo) { // highest volted soln, did a foor-loop instead of a while, included non-predator items in object list, only checked current index + next one, and uses splice() instead of a filter to remove eaten item... probably couldve solved on own given right time + mental space
    let answer = [zoo];
    let animals = {
      antelope: ['grass'],
      'big-fish': ['little-fish'],
      'little-fish': [],
      bug: ['leaves'],
      bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
      chicken: ['bug'],
      cow: ['grass'],
      fox: ['chicken', 'sheep'],
      giraffe: ['leaves'],
      lion: ['antelope', 'cow'],
      panda: ['leaves'],
      sheep: ['grass'],
      grass: [],
      leaves: [],
    };
    zoo = zoo.split(',');
    for(var i = 0; i < zoo.length - 1; i++) {
      let firstAnimal = zoo[i];
      let secondAnimal = zoo[i+1];
      if(Object.keys(animals).indexOf(firstAnimal) !== -1 && Object.keys(animals).indexOf(secondAnimal) !== -1) {
        if(animals[firstAnimal].indexOf(secondAnimal) !== -1) {
          answer.push(`${zoo[i]} eats ${zoo[i+1]}`);
          zoo.splice(i+1, 1);
          i = -1;
        } else if(animals[secondAnimal].indexOf(firstAnimal) !== -1) {
          answer.push(`${zoo[i+1]} eats ${zoo[i]}`);
          zoo.splice(i, 1);
          i = -1;
        }
      }
    }
    answer.push(zoo.toString());
    return answer;
  }