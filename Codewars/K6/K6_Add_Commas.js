// Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.
// You will receive both positive and negative numbers.

// Examples
// commas(1) == "1"
// commas(1000) == "1,000"
// commas(100.2346) == "100.235"
// commas(1000000000.23) == "1,000,000,000.23"
// commas(-1) == "-1"
// commas(-1000000.123) == "-1,000,000.123"


function commas(num){ // so the method in general i knew, but the regex i tried wasnt quite right, had to look up the one used below (also keep forgetting how to reference the found bit)
    let n = `${Math.round(num*1000)/1000}`.split('.')
    n[0] = n[0].replace(/(\d)(?=(\d{3})+$)/gm,'$1,')
    return n.join('.')
  }

// or

const commas = num => num.toLocaleString() // crazy smart idea, but depends on computer! locale changes based on where u live, so might be '1 000', '1,000', '1.000', or somethin else

commas=Q=>(+Q.toFixed(3)+'').replace(/\d(?=(\d{3})+($|\.))/g,'$&,')

const commas = num => (+num.toFixed(3)).toString().replace(/\B(?=(\d{3})+(\.|$))/g, ',');