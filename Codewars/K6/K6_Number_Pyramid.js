// You have to write a function pattern which creates the following Pattern (See Examples) up to n (parameter) number of rows.

// Rules/Note:
// - If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// - All the lines in the pattern have same length i.e equal to the number of characters in the last line.
// - Range of n is (-∞,100]

// Examples:
// pattern(10):
//          1         
//         121        
//        12321       
//       1234321      
//      123454321     
//     12345654321    
//    1234567654321   
//   123456787654321  
//  12345678987654321 
// 1234567890987654321
// pattern(15):
//               1              
//              121             
//             12321            
//            1234321           
//           123454321          
//          12345654321         
//         1234567654321        
//        123456787654321       
//       12345678987654321      
//      1234567890987654321     
//     123456789010987654321    
//    12345678901210987654321   
//   1234567890123210987654321  
//  123456789012343210987654321 
// 12345678901234543210987654321


function pattern(n){ // a bit broken up, but was easily done
    let pyramid = []
    for (let i=1; i<=n; i++) {
      let tier = ''
      for (let j=1;j<=i;j++) {
        tier += `${j%10}`
      }
      tier += tier.slice(0,tier.length-1).split('').reverse().join('')
      tier = ' '.repeat(n-i) + tier + ' '.repeat(n-i)
      pyramid.push(tier)
    }
    return pyramid.join('\n')
  }