// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.
// Note that zero is an even number. If you have an empty array, you need to return it.

// For example:
// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]
// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]


function sortArray(array) { // couldnt think of a way just via sort, so separated odd/even then combined
    let odds = array.filter(e=>e%2==1).sort((a,b)=>a-b)
    let even = array.filter(e=>e%2==0).sort((a,b)=>b-a)
    return array.map(e=>e%2 ? odds.shift() : even.shift())
  }