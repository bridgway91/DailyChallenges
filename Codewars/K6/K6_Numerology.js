// Task
// Calculate the single integer digit by adding up every digit in the birthdate: month, date, full year, from left to right (MMDDYYYY). If the sum is greater or equal to 10, add up the two digits of the sum.
// You will be passed in a Date object corresponding to your language.

// Example
// For example, with date '06/14/2010'
// => 06142010
// sum	digits left	action
// 0	06142010	0+0
// 0	6142010	    0+6
// 6	142010	    6+1
// 7	42010	    7+4
// 11	2010	    1+1 (sum is greater or equal to 10)
// 2	2010	    2+2
// 4	010	        4+0
// 4	10	        4+1
// 5	0	        5+0
// 5	done	
// So, what is your number?

function solution(date){ // easily done
    let dgts = date.toLocaleDateString().replace(/-/g,'')
  
    while(dgts.length > 1) {
      dgts = ''+dgts.split('').reduce((acc,cur)=>acc+Number(cur),0)
    }
    
    return Number(dgts)
  }

// alternatively...


let solution = (date) => (date.getDate()+date.getMonth()+1+date.getFullYear())%9||9 // huh....