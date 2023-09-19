// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Holy hell, this one was annoying...

function validatePIN (pin) {
    let arr = pin.split('');
    let allowed = ['0','1','2','3','4','5','6','7','8','9'];
    if (pin.length == 4 || pin.length == 6) {
      return arr.every(el => allowed.includes(el));
    } else {
      return false;
    }
  }

// alternatively...

function validatePIN(pin) { // with regex, which doesnt make much sense to me...
    return /^(\d{4}|\d{6})$/.test(pin)
}

function validatePIN (pin) { // guess you can compare numbers while theyre strings
    var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }

/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);