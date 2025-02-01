// Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

// Examples
// number2words(0)  ==>  "zero"
// number2words(1)  ==>  "one"
// number2words(9)  ==>  "nine"
// number2words(10)  ==>  "ten"
// number2words(17)  ==>  "seventeen"
// number2words(20)  ==>  "twenty"
// number2words(21)  ==>  "twenty-one"
// number2words(45)  ==>  "forty-five"
// number2words(80)  ==>  "eighty"
// number2words(99)  ==>  "ninety-nine"
// number2words(100)  ==>  "one hundred"
// number2words(301)  ==>  "three hundred one"
// number2words(799)  ==>  "seven hundred ninety-nine"
// number2words(800)  ==>  "eight hundred"
// number2words(950)  ==>  "nine hundred fifty"
// number2words(1000)  ==>  "one thousand"
// number2words(1002)  ==>  "one thousand two"
// number2words(3051)  ==>  "three thousand fifty-one"
// number2words(7200)  ==>  "seven thousand two hundred"
// number2words(7219)  ==>  "seven thousand two hundred nineteen"
// number2words(8330)  ==>  "eight thousand three hundred thirty"
// number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
// number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"


function number2words(n){ // seemed easy going in... was annoying, not too hard, but annoying
    if(n == 0) return 'zero'
    
    const ones = ['','one','two','three','four','five','six','seven','eight','nine']
    const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    let k = n>=1000 ? ' thousand ' : ''
    
    let num = String(n).split('')
    while(num.length < 6) {num.unshift('0')}
    let res = ''
    
    if(num[0] > 0) res += ones[Number(num[0])] + ' hundred '
    if(num[1] > 1) {
      res += tens[Number(num[1])]
      if(num[2] > 0) {res += '-' + ones[Number(num[2])] + ' '}
    } else if (num[1] == '1') {
      res += teens[Number(num[2])] + ' '
    } else {
      if(num[2] > 0) {res += ones[Number(num[2])] + ' '}
    }
    
    if(k) res += k
    
    if(num[3] > 0) res += ones[Number(num[3])] + ' hundred '
    if(num[4] > 1) {
      res += tens[Number(num[4])]
      if(num[5] > 0) {res += '-' + ones[Number(num[5])] + ' '}
    } else if (num[4] == '1') {
      res += teens[Number(num[5])] + ' '
    } else {
      if(num[5] > 0) {res += ones[Number(num[5])] + ' '}
    }
    
    return res.trim().replace(/  /g,' ')
  }

// or


function number2words(n){ // too tired to examine fully, but maybe will come back to look thru
    // works for numbers between 0 and 999999
    var b=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if(n>=0 && n<20){
      return b[n];
    }
    if(n >= 20 && n<100){
      return b2[Math.floor(n/10)-2]+(n%10===0?'':'-'+b[n%10])
    }
    if(n>=100 && n<1000){
      return b[Math.floor(n/100)]+' hundred'+(n%100===0?'':' '+number2words(n%100));
    }else{
      return number2words(Math.floor(n/1000))+' thousand'+(n%1000===0?'':' '+number2words(n%1000));
    }
  }