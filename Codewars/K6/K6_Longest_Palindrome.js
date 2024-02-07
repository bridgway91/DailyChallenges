// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0


function longestPalindrome(s){ // originally was a bit intimidated by this challenge, not sure how to approach, but looked up a way to find palindromes and found the obvious method of split>reverse>join and comparing.... was pretty easy after that
    let max = 0
    
    for (let i = 0; i < s.length; i++) {
      for (let j = i+1; j <= s.length; j++) {
        let temp = s.slice(i,j)
        let rev = temp.split('').reverse().join('')
        if ((temp == rev) && (temp.length > max)) max = temp.length
      }
    }
    
    return max
  }


// some slight variations, but nothing significantly different or new to learn from other solns