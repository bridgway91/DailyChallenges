// You throw a ball vertically upwards with an initial speed v (in km per hour). The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t where g is Earth's gravity (g ~ 9.81 m/s**2). A device is recording at every tenth of second the height of the ball. For example with v = 15 km/h the device gets something of the following form: (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... where the first number is the time in tenth of second and the second number the height in meter.

// Task
// Write a function max_ball with parameter v (in km per hour) that returns the time in tenth of second of the maximum height recorded by the device.

// Examples:
// max_ball(15) should return 4
// max_ball(25) should return 7

// Notes
// Remember to convert the velocity from km/h to m/s or from m/s in km/h when necessary.
// The maximum height recorded by the device is not necessarily the maximum height reached by the ball.


function maxBall(v0) { // super drawn-out, but felt like making things super-clear... did like remembering that i could just not have a limit for the for loop
    let maxH = 0
    for (let i = 0; ; i++) {
      let v = v0 * 1000 / 3600 // km/hr -> m/s
      let t = i / 10 // to get seconds
      let g = 9.81 // in m/s^2
      
      let height = (v * t) - (0.5 * g * t * t)
      
      if (height < maxH) {
        return i - 1
      } else {
        maxH = height
      }
    }
  }


// alternatively... KINEMATICS EQ: Vf = Vi + AT, H = ViT + 0.5AT^2 = 0.5(Vi+Vf)T

function maxBall(v0) {
    const g = 9.81, mpsToKph = 3.6, secondsToTenths = 10;
    return Math.round(secondsToTenths * v0 / mpsToKph / g);
  }


const maxBall = v => Math.round(v / 3.5316) // 3.5316 = (g * mpsTOkph) / 10 


function maxBall(v0) { // think this guy fucked up and got the right answer due to the tenth-seconds interracting with the 0.5 * g
    // Linear coefficient - initial speed, unit conversion form km/h to m/s
    v0 *= 1000 / 3600;
  
    // Quadratic coefficient - Earth's gravity constant, in m/s**2
    const g = 0.5 * 9.81;
  
    // Solving linear equation: (v0 - g * t) * t = 0
    // Converting time from seconds to tenths of second
    return Math.round(v0 / g * 5);
  }


const maxBall = v => Math.round((v * 1000 * 10 / 3600) / 9.81);