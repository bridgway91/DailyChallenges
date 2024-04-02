// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:
// - More than 3 characters but less than 20.
// - Must contain only alphanumeric characters.
// - Must contain letters and numbers.

function validPass(password){
    let test1 = lengthCheck(password)
    let test2 = onlyAN(password)
    let test3 = bothLN(password)
    return (test1 && test2 && test3) ? 'VALID' : 'INVALID'
  }
  function lengthCheck(p) {
    return (p.length > 3) && (p.length < 20)
  }
  function onlyAN(p) {
    return p.replaceAll(/[a-z]|[0-9]/gmi, '').length == 0
  }
  function bothLN(p) {
    return (p.replaceAll(/[a-z]/gmi, '').length > 0) && (p.replaceAll(/[0-9]/gmi, '').length > 0)
  }


// alternatively...

function validPass(password){ // not familiar with the .test() method... seems to operate on a regex, taking in a string, and if that regex finds a match in the string it returns true
    let ok = 0;
    if(password.length < 4 || password.length > 20) return 'INVALID';
    if(/[a-z]/g.test(password)) ok++;
    if(/[A-Z]/g.test(password)) ok++;
    if(/[0-9]/g.test(password)) ok++;
    if(/[./:!'^*\s%$`]/g.test(password)) return 'INVALID';
    
    return ok < 2 ? 'INVALID' : 'VALID';
}