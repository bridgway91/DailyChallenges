// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.

// Tested years are in range 1600 ≤ year ≤ 4000.


function isLeapYear(year) { // you know I sorted these challenges based on times completed... wonder why so many k6's were finished more than other k7's...
  if(year%400==0) return true
  if(year%4==0) return year%100==0 ? false : true
  
  return false
}