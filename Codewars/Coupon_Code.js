// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){ // briefly wrong, had to add a '=' to the code check, mf tried to get me with 0 == false shit
    if (enteredCode !== correctCode) return false;
    if (new Date(currentDate) > new Date(expirationDate)) return false;
    return true;
  }

// alternatively...

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){ // one-line version, didnt think about just making a && check
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }