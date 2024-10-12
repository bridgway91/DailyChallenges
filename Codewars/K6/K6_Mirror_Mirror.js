// Write a function evilTwin(obj) which returns a new object with all the same properties as obj, and with an additional property hasGoatee set to true.

// For example:
// var orig = {x: 5};
// console.log(orig.x) // -> 5
// console.log(orig.hasGoatee) // -> undefined
// var twin = evilTwin(orig);
// console.log(twin.x) // -> 5
// console.log(twin.hasGoatee) // -> true

// If the original object is modified, its twin should reflect the changes so:
// orig.z = 12
// console.log(twin.z) // -> 12


function evilTwin(obj) { // so i had to look at solns for this one, my own solution was really close, practically the same as this but it wasnt working... think i also had an assignProperties or something for the new object from the original since a console log wasnt showing it having anything, but apparently it was okay and just adding in the goatee was enough
    let evil = Object.create(obj)
    evil.hasGoatee = true
    return evil
  }