// You are given three piles of casino chips: white, green and black chips:
// - the first pile contains only white chips
// - the second pile contains only green chips
// - the third pile contains only black chips

// Each day you take exactly two chips of different colors and head to the casino. You can choose any color, but you are not allowed to take two chips of the same color in a day.
// You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

// Examples (input -> output)
// * [1,1,1] -> 1, because after you pick on day one, there will be only one chip left
// * [1,2,1] -> 2, you can pick twice; you pick two chips on day one then on day two
// * [4,1,1] -> 2
// More examples in the test cases. Good luck!

// Brute force is not the way to go here. Look for a simplifying mathematical approach.



function solve(arr){ // took a while looking at the examples to figure out a mathematical way to get the result... honestly not even sure how valid it is, but it passed all the tests
    arr = arr.sort((a,b) => b-a) // highest first
    if (arr[0] >= arr[1]+arr[2]) {
      return arr[1]+arr[2]
    } else {
      return Math.floor((arr[0]+arr[1]+arr[2])/2)
    }
  }


// alternatively...

function solve(arr){ // so i was kinda right
    var [a,b,c] = arr.sort((x,y)=>x-y)
    return Math.min(a+b,~~((a+b+c)/2)) // note: ~ is similar to Math.floor()
}