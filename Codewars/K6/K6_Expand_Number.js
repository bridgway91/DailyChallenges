// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) { // long, but no time to think of short version!
    let digits = `${num}`.split('');
    for (let i = digits.length-1; i >= 0; i--) {
      if (digits[i] == '0') continue;
      digits[i] = digits[i] + '0'.repeat(digits.length-1-i);
    };
    return digits.filter(el=>el!='0').join(' + ');
  }


// alternatively...

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");