// You have been hired by a company making electric garage doors. Accidents with the present product line have resulted in numerous damaged cars, broken limbs and several killed pets. Your mission is to write a safer version of their controller software.

// Specification
// We always start with a closed door. The remote control has exactly one button, with the following behaviour.
// If the door is closed, a push starts opening the door, and vice-versa
// It takes 5 seconds for the door to open or close completely
// While the door is moving, one push pauses movement, another push resumes movement in the same direction
// In order to make the door safer, it has been equipped with resistance-based obstacle detection. When the door detects an obstacle, it must immediately reverse the direction of movement.

// Input
// A string where each character represents one second, with the following possible values.
// '.' No event
// 'P' Button has been pressed
// 'O' Obstacle has been detected (supersedes P)
// As an example, '..P....' means that nothing happens for two seconds, then the button is pressed, then no further events.

// Output
// A string where each character represents one second and indicates the position of the door (0 if fully closed and 5 fully open). The door starts moving immediately, hence its position changes at the same second as the event.

// Example
// ..P...O..... as input should yield 001234321000 as output


function door(events) { // too many if statements for my liking, but tonight's problems have been a headache
    let door = 0 // 0 == closed, 5 == open
    let dir = true // true = opening, false = closing
    let pause = true
    
    return events.split('').map(e=>{
      if (e=='P') {
        if (pause) {
          pause = false
          dir ? door++ : door--
        } else {
          pause = true
        }
      } else if (e=='O') {
        dir = dir ? false : true
        dir ? door++ : door--
      } else {
        if (!pause) dir ? door++ : door--
      }
      if (door == 5) {
        pause = true
        dir = false
      }
      if (door == 0) {
        pause = true
        dir = true
      }
      return door
    }).join('')
  }


// alternatively...

function door(es) { // interesting to use a +1/-1 instead of true or false for direction
    var moving=0,direction=1,height=0,result=""
    for(var e of es){
      if(e=="O") direction *= -1
      else if(e=="P") moving = 1 - moving
      height += moving ? direction : 0 
      result += height
      if(moving && ( height == 5 || height == 0 )) moving = 0, direction *= -1
    }
    return result
  }