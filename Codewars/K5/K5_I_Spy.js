// In testing, a spy function is one that keeps track of various metadata regarding its invocations. Some examples of properties that a spy might track include:
// Whether it was invoked
// How many times it was invoked
// What arguments it was called with
// What contexts it was called in
// What values it returned
// Whether it threw an error

// For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:
// .callCount() — returns the number of times spy has been called
// .wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
// .returned(val) — returns true if spy ever returned val, else returns false

// Below is a specific example of how spyOn might work in the wild.
// function adder(n1, n2) { return n1 + n2; }
// var adderSpy = spyOn( adder );
// adderSpy(2, 4); // returns 6
// adderSpy(3, 5); // returns 8
// adderSpy.callCount(); // returns 2
// adderSpy.wasCalledWith(4); // true
// adderSpy.wasCalledWith(0); // false
// adderSpy.returned(8); // true
// adderSpy.returned(0); // false


function spyOn(func) { // ok, i kind of knew how to handle this, and ive dealt with similar problems before, but for whatever reason i could not recall how to handle separating out the variables needed to hold onto the info, so got cgpt to help... >_< just declare the variables and have another function, duh... i feel dumb
  let count = 0;
  const calls = [];
  const returns = [];

  function spy(...args) {
    count++;
    calls.push(...args);
    const result = func(...args);
    returns.push(result);
    return result;
  }

  spy.callCount = () => count;
  spy.wasCalledWith = (val) => calls.includes(val);
  spy.returned = (val) => returns.includes(val);

  return spy;
}
