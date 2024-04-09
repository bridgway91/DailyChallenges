// You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

// Input: Year as an int.
// Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

// Preconditions:
// - Week starts on Monday.
// - Year is between 1583 and 4000.
// - Calendar is Gregorian.

// Examples (input -> output):
// * 2427 -> ['Friday']
// * 2185 -> ['Saturday']
// * 2860 -> ['Thursday', 'Friday']


function mostFrequentDays(year){ // annoying problem, starting week on monday when system starts on sunday is stupid, dont like my soln
    let start = new Date(`${year}-01-01`)
    let end = new Date(`${year}-12-31`)
    let most = [Number(start.getDay()),Number(end.getDay())]
    if(most[0] == 0) {[most[0],most[1]] = [most[1],most[0]]}
    if(most[0] == most[1]) {most.pop()}
    return most.map(n => {
      if (n == 0) { return 'Sunday' }
      if (n == 1) { return 'Monday' }
      if (n == 2) { return 'Tuesday' }
      if (n == 3) { return 'Wednesday' }
      if (n == 4) { return 'Thursday' }
      if (n == 5) { return 'Friday' }
      if (n == 6) { return 'Saturday' }
    })
  }


// alternatively...


function mostFrequentDays(year) { // actually kinda similar to mine, but return map was done a lot smarter
    var days = [
      new Date(year, 0, 1).getDay(), 
      new Date(year, 11, 31).getDay()
    ];
    if (days[0] === days[1])
      days.pop();
    else if (!days[0] || days[0] > days[1] && days[1])
      days.reverse();
    return days.map(n => ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'][n] + 'day');
  }