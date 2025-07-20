// Consider the following expansion:
// solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
// solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
// Given a string, return the expansion of that string.

// Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.
// More examples in test cases.
// Good luck!


function solve(s) { // have done this approach before and can never remember it... in my own words we seem to have a separate stack that holds all the needed info for each step, we build up a current that is part of the pushed info and pulled again later as a 'prev' which is then applied onto the newest current for a new current... not exactly the most clear...
  let stack = [];
  let current = "";
  let num = 0;

  for (let char of s) {
    if (/[0-9]/.test(char)) {
      num = +char; // just a single-digit number
    } else if (char === '(') {
      stack.push([current, num||1]);
      current = "";
      num = 0;
    } else if (char === ')') {
      let [prev, count] = stack.pop();
      current = prev + current.repeat(count);
    } else {
      current += char;
    }
  }

  return current;
}
