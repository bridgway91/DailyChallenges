// Given 2 pairs of values each representing a road (the number of cars on it and its name), construct an object whose turngreen method returns the name of the road with the most traffic at the moment of the method call, and clears that road from cars.
// After both roads are clear of traffic, or if the number of cars on both roads is the same from the beginning, return an empty value instead.

// Example
// t = SmartTrafficLight([42, "27th ave"], [72, "3rd st"])
// t.turngreen()  ==  "3rd st"
// t.turngreen()  ==  "27th ave"
// t.turngreen()  ==  null
// t = SmartTrafficLight([10, "27th ave"], [10, "3rd st"])
// t.turngreen()  ==  null


class SmartTrafficLight { // pretty easy, was curious how itd be set up for multiple street inputs (>2), but rather than trying to handle that case, just solved what was in front of me
    constructor(st1, st2) {
      this.streets = []
      
      if(st1[0] != st2[0]) {
        this.streets.push(st1)
        this.streets.push(st2)
        this.streets.sort((a,b)=>b[0]-a[0])
      }
    }
    
    turngreen() {
      let most = this.streets.shift()
      return most ? most[1] : null
    }
  }

// or

class SmartTrafficLight { // ok, dont like how clumped this is, but is sorta what i wanted to do for a many-input solution
    constructor(...arr) { this.arr = arr.sort((a,b)=>a[0]-b[0]) }
    turngreen() { return this.arr.length>1 && this.arr[0][0] == this.arr[1][0] ? null : (this.arr.pop()||[,null])[1]}
  }