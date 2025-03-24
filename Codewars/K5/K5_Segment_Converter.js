// A 7-segment converter is basically a fancy way of saying a component that turns a number into instructions for a digital clock display.
// For this kata, you need to write a function that returns the correct binary input for the display.

// The display has 7 segments that look like this:
//  _ 
// |_|
// | |
//  ¯ 
// Each segment is turned on or off to form a number from 0 to 9. The instruction it takes is in the form of a single binary stream that looks something like this: 1011010. Each bit tells the display if the corresponding segment should be on or off.
// The bits for each segment are in the following order, from right to left: (Binary always reads from right to left!)
// Top Horizontal
// Middle Horizontal
// Bottom Horizontal
// Top-Left Vertical
// Top-Right Vertical
// Bottom-Left Vertical
// Bottom-Right Vertical

// So the example instruction above, 1011010 would result in the display only showing the middle, top-left, top-right, and bottom-right segments, forming the shape of a 4. That means that, for the number 4, your function should return 90, which has exactly the same binary representation: 1011010.
// If you can do this for each of the other 9 digits, you'll pass the test!

// (The number passed to the function will always be valid, ranging from 0 to 9 inclusive)
// I have included a helper function, display(input) which will return some HTML for you to log out to the console, which will show you how the given number input would displayed.

// Here's each digit, shown as it should be implemented:
// (did not copy over well, just imagine an old digital clock)


function sevenSegmentNumber(number) { // this should not have been a K5... maybe in older versions where parseInt wasn't a thing it wouldve been harder, idk
    //  BR, BL, TR, TL, BM, MM, TM
    const clockNum = ['1111101','1010000','0110111','1010111','1011010','1001111','1101111','1010001','1111111','1011111']
    return parseInt(clockNum[number],2)
}