// Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

// So what to do?
// Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.

// Easy example:
// Input: "gdfgdf234dg54gf*23oP42"
// Output: "54929268" (because 23454*2342=54929268)

// First there are some static tests, later on random tests too...


function calculateString(st){ // thought i did this one before, apparently not, was annoying (easy to brute-force, but wanted to find a slimmer work-around... this was best i got)
    const clean = st.replace(/[^0-9|.|+|\-|*|\/]/gm,'')
  
    const operator = clean.replace(/[^+|\-|*|\/]/gm,'')
    const opInd = clean.indexOf(operator[0])
  
    const first = Number(clean.substring(0,opInd))
    const second = Number(clean.substring(opInd+1))
  
    return clean[opInd]=='/' ? `${Math.round(first/second)}`
          :clean[opInd]=='*' ? `${Math.round(first*second)}`
          :clean[opInd]=='-' ? `${Math.round(first-second)}`
                              :`${Math.round(first+second)}`
  }


// alternatively...

function calculateString(st) { // another method thats similar to mine in complexity i think... to note, most other solns utilized eval() on the cleaned string, which works, but is not good practice
    let calculations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "/": (a, b) => a / b,
      "*": (a, b) => a * b,
    };
  
    let sign = st.search(/[-/+*]/g);
    let regexGetNumber = /[0-9.]+/gi;
    let [side1, side2] = st.split(st[sign]);
    let num1 = parseFloat(side1.match(regexGetNumber).join(""));
    let num2 = parseFloat(side2.match(regexGetNumber).join(""));
  
    return Math.round(calculations[st[sign]](num1, num2)).toString();
  }