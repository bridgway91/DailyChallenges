// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
// The restriction is that the characters in part1 and part2 should be in the same order as in s.
// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:
// 'codewars' is a merge from 'cdw' and 'oears':
//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears


function isMerge(s, part1, part2) { // excessively long, probably my own fault for not solving myself instead of relying on cgpt, ideal method seems to be recursion but it kept failing at that... imo part of the blame is in the instructions, not very clear
  // Quick fail: if lengths don't match, we can't build s using all of part1 + part2
  if (part1.length + part2.length !== s.length) return false;

  // Create a 2D table where dp[i][j] means:
  // "Can we build s[0..i+j-1] using part1[0..i-1] and part2[0..j-1]?"
  const dp = Array(part1.length + 1)
    .fill(null)
    .map(() => Array(part2.length + 1).fill(false));

  dp[0][0] = true; // base case: empty s from empty part1 + part2

  for (let i = 0; i <= part1.length; i++) {
    for (let j = 0; j <= part2.length; j++) {
      const sIndex = i + j;

      // If current dp[i][j] is reachable, check next possible characters
      if (dp[i][j]) {
        if (i < part1.length && part1[i] === s[sIndex]) {
          dp[i + 1][j] = true;
        }
        if (j < part2.length && part2[j] === s[sIndex]) {
          dp[i][j + 1] = true;
        }
      }
    }
  }

  // Final cell indicates whether full s can be built using all of part1 and part2
  return dp[part1.length][part2.length];
}


// or...

function isMerge(s, part1, part2) { // see? nice and simple... code-wise, logic not so clear
  return !s ? !(part1 || part2) : // if no string left, return !(part1||part2), if both empty then true, else false
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) || // admittedly im a little lost here
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}