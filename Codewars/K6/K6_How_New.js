// The new operator in JavaScript creates objects by following these three steps:
// - First, it creates a new empty object. (Already done for you here.)
// - Next, it sets the new object’s `.__proto__` property to match the prototype property of the function being invoked.
// - Finally, the operator invokes the function and passes the new object as the “this” reference.

// Use this understanding of the new operator to create an instance of the object MyObject, but do so without calling "new MyObject()".
// Note: Currently there is no way to prevent you from passing this kata just by typing "var myObj = new MyObject();". However, I will scrunch my eyebrows when I see your solution and make quiet remarks to myself about how you don't understand what this kata is trying to teach you.

var myObj = Object.create(MyObject.prototype) // i 100% took this from a soln, apparently the method this problem seemed to want me to do is no longer supported in modern JS
MyObject.bind(myObj)()


// " // DON'T use __proto__ unless you have no other option.
// It's slow and deprecated
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto "