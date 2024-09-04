// What date corresponds to the nth day of the year?
// The answer depends on whether the year is a leap year or not.

// Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
// The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
// Only valid combinations of a day number and isLeap will be tested.

// Examples:
// * With input `41, false` => return "February, 10"
// * With input `60, false` => return "March, 1
// * With input `60, true` => return "February, 29"
// * With input `365, false` => return "December, 31"
// * With input `366, true` => return "December, 31"


function getDay(day, isLeap){ // dont know if there's a way to do this without writing out all the months...
    const year = [['January',31],['February',isLeap?29:28],['March',31],['April',30],['May',31],['June',30],['July',31],['August',31],['September',30],['October',31],['November',30],['December',31]]
    let date = ''
    year.forEach(m=> day>m[1] ? day-=m[1] : date?date:date+=`${m[0]}, ${day}`)
    return date
  }

// alternatively...

function getDay(day, isLeap) {
    const d = new Date(1999 + isLeap, 0, day); // Date mdn did not lead me to believe this was doable
    return d.toLocaleString('en',{month:'long'}) + ', ' + d.getDate(); // unfamiliar with some of this, toLocaleString seems to be a method working on date objects that will output the date in various formats, with first arg being format/language/location, and second arg being an object with various options (of which only month:'long' is used here, so we only want the fully written month)... then rest of the concats are easy enough
  }