// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:
// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.
// To compare the results of the teams you are asked for giving three statistics; range, average and median.
// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.
// Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.
// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be
// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`
// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""


function stat(strg) { // this problem was easy, but holy fuck was it annoying due to the formating requirements, required all this extra bs
    let times = strg.split(', ')
    let seconds = times.map(e=>{ // e = 'hh|mm|ss'
      let hh = Number(e.split('|')[0])
      let mm = Number(e.split('|')[1])
      let ss = Number(e.split('|')[2])
      return (hh * 60 * 60) + (mm * 60) + (ss)
    }).sort((a,b)=>a-b)
    let range = seconds[seconds.length - 1] - seconds[0]
    let mean = Math.floor(seconds.reduce((acc,cur)=>acc+cur,0) / seconds.length)
    let median = (seconds.length % 2)
      ? seconds[Math.floor(seconds.length/2)] // if odd
      : Math.floor((seconds[seconds.length/2] + seconds[(seconds.length/2)-1]) / 2) // if even
  
    return (strg == '')
      ? ''
      : `Range: ${secsTOstr(range)} Average: ${secsTOstr(mean)} Median: ${secsTOstr(median)}`
  }
  
  function secsTOstr(sec) {
    let hrs = padlength(''+Math.floor(sec / 3600))
    let mins = padlength(''+Math.floor((sec / 60) - (hrs * 60)))
    let secs = padlength(''+Math.floor(sec - (mins * 60) - (hrs * 3600)))
    return `${hrs}|${mins}|${secs}`
  }
  
  function padlength(str) {
    while(str.length < 2) {
      str = '0' + str
    }
    return str
  }


// alternatively...

const stat = strg => { // pretty much the only one i bothered to look over due to seeming simpler and actually learned something
    if (!strg) return strg;
    const arr = strg.split(`, `).map(val => val.split(`|`).reduce((pre, val) => +val + pre * 60, 0)).sort((a, b) => a - b); // my sorted seconds-array done in 1 line
    const range = Math.max(...arr) - Math.min(...arr); // he didnt need the max & min since its alrdy sorted
    const average = arr.reduce((pre, val) => pre + val) / arr.length ^ 0;
    const median = arr.length % 2 ? arr[arr.length >> 1] : (arr[arr.length >> 1] + arr[--arr.length >> 1]) >> 1;
    const toStr = num =>
      [num / 3600 ^ 0, num / 60 % 60 ^ 0, num % 60].map(val => `${val}`.padStart(2, `0`)).join(`|`); // did not know about padStart() method (there's also a padEnd())
  
    return `Range: ${toStr(range)} Average: ${toStr(average)} Median: ${toStr(median)}`;
  };