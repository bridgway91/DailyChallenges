// The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

// For example:
// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call

// Different loopers should not affect each other, so be wary of unmanaged global state.

function makeLooper(str) { // sort of basic functional programming... kinda... i think... overall not hard
  let i = 0; // This variable is enclosed in the returned function's scope

  return function() {
    const char = str[i];
    i = (i + 1) % str.length; // Wrap around when we reach the end
    return char;
  };
}