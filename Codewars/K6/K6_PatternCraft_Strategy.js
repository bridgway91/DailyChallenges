// Your Task
// Complete the code so that when a Viking is flying its position increases by 10 each time it moves. If it is walking then the position is increased by 1.
// In this Kata, Viking starts as a ground unit when it is created.

// You have 3 classes:
// - Viking: has a position, moveBehavior and move method.
// - Fly and Walk: the move behaviors with the move(unit) method. Fly has to move 10 positions at a time and Walk has to move 1.


class Fly { // i hate how they made this 3 different classes, it could have just been 1
    move(unit) {
      unit.position += 10
    }
  }
class Walk {
    move(unit) {
      unit.position++
    }
  }
class Viking {
    constructor() {
      this.position = 0
      this.moveBehavior = new Walk()
    }
    move() {
      this.moveBehavior.move(this)
    }
  }


// alternatively...


class Fly {move(){return 10}} // ignores the whole "unit" aspect
class Walk {move(){return 1}}
class Viking{
	constructor(){
		this.moveBehavior = new Walk();
		this.position = 0;
	}
	move(){this.position += this.moveBehavior.move()}
}