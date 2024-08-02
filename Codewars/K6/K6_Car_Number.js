// Let’s assume that when you register a car you are assigned two numbers:
//  Customer ID – number between 0 and 17558423 inclusively. It is assigned to car buyers in the following order: the first customer receives an ID of 0, the second customer receives an ID of 1, the third - 2, and so on;
//  A Number Plate – 6-character combination composed of the series - three Latin lowercase letters from a to z; and the serial number - three digits from 0 to 9. Example: aaa001, xyz123, tok469;

// Each Number Plate is related to the given Customer ID. For example:
// Customer ID of 0: aaa001
// Customer ID of 21: aaa022
// Customer ID of 169: aaa170

// Your Task
// Write a function  // findTheNumberPlate
// which takes the Customer ID as an argument, calculates the Number Plate corresponding to this ID and returns it as a string;

// Rules
// 1 - The serial number changes first. For each 3-letter series it goes through 001 to 999, such as: aaa001, aaa002, aaa003, ......, aaa998, aaa999
// 2 - The leftmost letter in the series switches alphabetically each time after the serial number has moved through 001 to 999 inclusively;
    // aaa001...aaa999
    // at this point the leftmost letter will switch alphabetically, while the serial number repeats the same cycle again;
    // baa001...baa999,
    // ...... ,
    // zaa001...zaa999
// 3 - The middle letter switches alphabetically each time after the leftmost letter has moved through a to z and the z** series has moved through 001 to 999.
    // zaa001...zaa999
    // at this point the middle letter will switch alphabetically, while the leftmost letter and the serial number repeat the same cycle again;
    // aba001...aba999,
    // bba001...bba999,
    // ......,
    // zza001...zza999
// 4 - The rightmost letter switches alphabetically each time after the middle letter has moved through a to z and the zz* series has moved through 001 to 999.
    // zza001...zza999
    // at this point the rightmost letter will switch alphabetically, while the middle letter, the leftmost letter, and the serial number repeat the same cycle again;
    // aab001...aab999,
    // bab001...bab999,
    // ......,
    // zab001...zab999,
    // abb001...abb999,
    // bbb001...bbb999,
    // ......,
    // zbb001...zbb999,
    // acb001...acb999,
    // ......, 
    // zzz001...zzz999

// Note
// If the serial number has less than 3 digits, the missing places should be adjusted with zeroes.
// i.e: 12 should equal 012; 4 should equal 004.

// Once again, the customer ID starts with 0.
// Good luck!


// ok, this problem is conceptually easy enough, but i didnt solve, cuz i could not get around the fact that this idiot set it up so that each letter rotation was only 999 numbers, rather than 1000... WHY NOT ALLOW 000 AT THE END???! IT WOULD LOOK SO MUCH CLEANER CODE-WISE... SO ANNOYING

function findTheNumberPlate(customerID){ // admittedly my soln would probably be a lot more drawn out, but this was the basic idea i had
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    const numeric = ("000"+ ((customerID%999 +1).toString(10))).slice(-3); // gets the number portion by just modding out the letter rotations, +1 due to starting at '001', then zero-pads
    const l = Math.floor(customerID/999); // grabbing the amount of times a letter is rotated through
    const alpha = alphabet[l%26]+alphabet[(Math.floor(l/26))%26]+alphabet[(Math.floor(l/(26*26)))%26]; // building up the letters through subsequent mods (probably wouldve had most trouble with this part)
  
  
    return alpha + numeric;
  }