// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:
// - true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// - false otherwise.

// For example, given the following input array:
// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// Notes:
// - The input array will always be valid and formatted as in the example above.
// - Age is represented by a number which can be any positive integer up to 199.


function isAgeDiverse(list) { // final return is a little gross, but it works
    const ages = list.map(e => e.age)
    const groups = [10,20,30,40,50,60,70,80,90]
  
    return groups.every(e => ages.some(a => (a >= e) && (a <= e+9))) && ages.some(a => a >= 100)
  }

// most common solns were either similar to mine, or a long list of .some()'s