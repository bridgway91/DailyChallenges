// You need to write a password generator that meets the following criteria:

// 6 - 20 characters long
// contains at least one lowercase letter
// contains at least one uppercase letter
// contains at least one number
// contains only alphanumeric characters (no special characters)
// Return the random password as a string.

// Note: "randomness" is checked by counting the characters used in the generated passwords - all characters should have less than 50% occurance. Based on extensive tests, the normal rate is around 35%.


function passwordGen(){ // simple enough, but i hate how long it is, there has to be an easier way to do this
    const len = Math.floor(Math.random()*15) + 6
    let pw = '' 
      + String.fromCharCode(Math.floor(Math.random()*26) + 97)
      + String.fromCharCode(Math.floor(Math.random()*26) + 65)
      + Math.floor(Math.random()*10)
  
    while (pw.length < len) {
      let pick = Math.floor(Math.random()*3)
      if(pick == 0) {
        pw += String.fromCharCode(Math.floor(Math.random()*26) + 97)
      } else if (pick==1) {
        pw += String.fromCharCode(Math.floor(Math.random()*26) + 65)
      } else {
        pw += Math.floor(Math.random()*10)
      }
    }
  
    return pw
  }

// alternatively...

function passwordGen(){ // main other method i found was putting everything into a string and pulling randomly from that, then checking the result against a regex (which could be seen in the tests) and redoing if the check failed.. while the final result is more random than mine, it can also take longer (i think)
    var pass = Array.apply(null, Array(Math.floor(Math.random()*(20-6+1)+6))).map(function(){
      var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return c.charAt(Math.random() * c.length);
    }).join('');
    return /(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)^.{6,20}$/.test(pass) ? pass : passwordGen();
  }