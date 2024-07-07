// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.
// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

function countDays(d){ // again easy, though took a min to figure out how to handle the date differential
    const now = new Date()
    let daysDiff = (now-d)/1000/60/60/24
    if (daysDiff > 1) {
      return 'The day is in the past!'
    } else if (daysDiff <= 1 && daysDiff >= -1) {
      return "Today is the day!"
    } else {
      return `${Math.abs(Math.round(daysDiff))} days`
    }
  }