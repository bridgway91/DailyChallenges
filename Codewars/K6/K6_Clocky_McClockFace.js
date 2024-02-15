// Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
// And because the local council has lost most of our tax money to an elaborate email scam there are no funds to fix the clock properly.
// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!
// What a bunch of cheapskates!
// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees

// Notes
// 0 <= angle <= 360
// Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.
// 3 o'clock is 03:00, not 15:00
// 7 minutes past midnight is 12:07
// 7 minutes past noon is also 12:07


var whatTimeIsIt = function(angle) { // again, a bit drawn out, but i like this way, particularly for challenges
    console.log(angle)
    let hh = Math.floor(angle / 30)
    let mm = Math.floor((angle - hh*30) * 2) // couldve just been angle%30 * 2
    console.log(hh, mm)
    hh = `${hh || 12}`.padStart(2,'0')
    mm = `${mm}`.padStart(2,'0')
    console.log(hh, mm)
    return hh + ':' + mm
  }


// nothing to really note in other solns