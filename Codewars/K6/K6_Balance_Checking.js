// You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

// "1000.00
// 125 Market 125.45
// 126 Hardware 34.95
// 127 Video 7.45
// 128 Book 14.32
// 129 Gasoline 16.10"

// The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).
// First you have to clean the lines keeping only letters, digits, dots and spaces.
// Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

// "Original_Balance:_1000.00
// 125_Market_125.45_Balance_874.55
// 126_Hardware_34.95_Balance_839.60
// 127_Video_7.45_Balance_832.15
// 128_Book_14.32_Balance_817.83
// 129_Gasoline_16.10_Balance_801.73
// Total_expense__198.27
// Average_expense__39.65"

// On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

// Notes
// - See input examples in Sample Tests.
// - It may happen that one (or more) line(s) is (are) blank.
// - Round to 2 decimals your calculated results (Elm: without traling 0)
// - The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".


function balance(book) { // string too fking long with too many places where one small thing could be wrong and mess up the whole submission despite still looking fine, so dumb
    let cleanbook = book.replace(/[^0-9a-zA-Z.\n ]/gm,'').replace(/\n{2,}/gm,'\n').replace(/\n$/gm,'')
    let report = cleanbook.split('\n')
    let balance = Number(report[0])
    let expense = 0
    
    report = report.map((e,i,a)=> {
      if (i == 0) {
        return `Original Balance: ${Number(e).toFixed(2)}`
      } else {
        let line = e.split(' ')
        line[2] = Number(line[2]).toFixed(2)
        balance -= Number(line[2])
        expense += Number(line[2])
        return line.join(' ') + ` Balance ${balance.toFixed(2)}`
      }
    })
    report.push(`Total expense  ${expense.toFixed(2)}`)
    report.push(`Average expense  ${(expense/(report.length-2)).toFixed(2)}`)
  
    return report.join('\r\n')
  }


// alternatively...


function balance(book) { // only here to point out the first variable assignment block... im assuming all the methods on book end with an array similar to what i did, but then it assigned that array to variables, seemingly saying originalBalance is the first index in the array, and then 'entries' is all the rest following... neat

    let totalExpense = 0
    , [ originalBalance, ...entries ] = book
      .trim()
      .replace(/[^a-z0-9\s.]+/gi, '')
      .replace(/\s{2,}/g, m => m[0])
      .split(/\n/);
  
    originalBalance = parseFloat(originalBalance);
  
    entries = entries.map(row => 
      row.replace(/\S+$/g, m => {
        totalExpense += parseFloat(m);
        return parseFloat(m).toFixed(2) + ' Balance ' + (originalBalance - totalExpense).toFixed(2);
      })
    );
  
    entries.unshift('Original Balance: ' + originalBalance.toFixed(2));
    entries.push('Total expense  ' + totalExpense.toFixed(2));
    entries.push('Average expense  ' + (totalExpense / (entries.length - 2)).toFixed(2));
    return entries.join("\r\n");
     
  }