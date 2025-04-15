// Write a function which returns the day of the week for a specified date.
// While this sounds straight forward the years this function will be testing against are only within the range of 1-99.
// Any date range past 99 or before 1 will not have unit tests against.
// All dates in the unit tests used will be in the format of DD-MM-YYYY.
// 17th of February 5 will be passed as '17-02-0005', though '17-2-5' should work just the same.

// Example:
// getGoodOldDay('19-11-0017'); // Returns Sunday
// getGoodOldDay('5-7-53'); // Returns Saturday

// Note/Hint:
// If in doubt, check the full date you are about to return the day of the week for.


function getGoodOldDay(input){ // was really simple, although had to talk to chatgpt a bit, as I knew there were some # of years where the day of the weeks would all line up for the whole year, so a cycle, but I wasn't sure exactly how many years to jump, then after talking to CGPT found out a 2k year leap would work, just had to adjust year then and all worked out
    let newDate = input.split('-').map((e,i)=>e.padStart(i==2?4:2,'0')).reverse().join('-')
    newDate = '2' + newDate.slice(1)
    let getDate = new Date(newDate)
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][getDate.getDay()]
  };

// or...

function getGoodOldDay(input){ // wait, wtf is this 'setFullYear()' shit???
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dateInput = input.split('-').map(function(e){return +e;});
    var date = new Date();
    date.setFullYear(dateInput[2], dateInput[1]-1, dateInput[0]);
    return days[date.getDay()];
  };