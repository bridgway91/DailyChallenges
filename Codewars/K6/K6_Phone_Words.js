// Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image: ...

// For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

// Further details:
// - 0 is a space in the string.
// - 1 is used to separate letters with the same number.
// - always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
// - you cannot return digits.
// - Given a empty string, return empty string.
// - Return a lowercase string.

// Examples:
// "443355555566604466690277733099966688"  -->  "hello how are you"
// "55282"                 -->  "kata"
// "22266631339277717777"  -->  "codewars"
// "66885551555"           -->  "null"
// "833998"                -->  "text"
// "000"                   -->  "   "


function phoneWords(stringOfNums) { // dear god this problem gave me headaches
    const phone = {
      '2':['a','b','c'],
      '3':['d','e','f'],
      '4':['g','h','i'],
      '5':['j','k','l'],
      '6':['m','n','o'],
      '7':['p','q','r','s'],
      '8':['t','u','v'],
      '9':['w','x','y','z']
    }
  
    let words = stringOfNums.split('0')
  
    words = words.map(e=>[...(e.match(/(\d)\1*/g) || [])].map(n=>{
      let num = n[0]
      if(num=='1') return ''
      if(n.length <= phone[num].length) {
        return phone[num][n.length-1]
      } else {
        let temp = []
        let most = phone[num].length
        while(n.length) {
          temp.push(n.substring(0,most))
          n = n.substring(most)
        }
        return temp.map(l=>phone[num][l.length-1]).join('')
      }
    }).join('')).join(' ')
  
    return words
  }


// alternatively...


function phoneWords(stringOfNums) {  // WTF?!
    const keys = [' ', ,'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const regexp = /2{1,3}|3{1,3}|4{1,3}|5{1,3}|6{1,3}|7{1,4}|8{1,3}|9{1,4}|0{1}/g; // grabs '2' from 1-3 times, OR '3' from 1-3 times, etc...
    let result = '';  
    
    stringOfNums.match(regexp)?.map(nums => { // idk why the ? is there... but the match should split up the string into usable number sections
      const key = keys[nums[0]];
      const letter = nums.length-1;  
      result += key[letter]; // so yeah, rather than breaking apart into words, this did letter-by-letter (+ spaces)
    }); 
    
    return result;
  }