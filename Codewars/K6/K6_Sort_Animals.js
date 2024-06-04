// Consider the following class:
// var Animal = { 
//     name: "Cat", 
//     numberOfLegs: 4 
// }

// Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.
// If an empty list is passed in, it should return an empty list back.


function sortAnimal(animals) { // i dont know why, but i had the hardest time getting this fucking array of objects to sort the way i wanted it to, had to go back and forth with submitted solutions
    return animals.slice()
      .sort((a,b)=>{
      if (a.numberOfLegs == b.numberOfLegs) {
        return a.name.localeCompare(b.name)
      } else {
        return a.numberOfLegs - b.numberOfLegs
      }
    })
  }