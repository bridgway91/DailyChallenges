// Comparing objects is not an easy task in JavaScript. The comparison operator only returns true if both variables point to the same object, that's why two objects with the same properties and values are different for JavaScript, like this:
// var a = { name: 'Joe' };
// var b = { name: 'Joe' };
// a == b;  //-> false

// Sometimes it's really useful to detect when two objects have the same values.
// Your task is to develop the deepCompare function to test if two objects have the same properties and values. Remember that an object can contain other objects. The function should also be able to correctly compare simple values, like strings and numbers (without using type coercion, please).
// To make things simpler, it will only have to deal with simple values and objects and arrays containing strings, booleans and numbers, without taking into account regular expressions, dates and functions.


function deepCompare(o1, o2) { // copied 90% of code from a google search for deep comparison, a little annoyed the JSON.stringify() method didnt work, and then this ran into issues with trying to get keys of null or undefined, idk why the source i got this from didnt have to worry about that, but eventually i added the first two checks and got it to run fine
    if(o1===null || o2===null) { return o1===o2 ? true : false }
    if(o1===undefined || o2===undefined) { return o1===o2 ? true :false }
    
    const objKeys1 = Object.keys(o1);
    const objKeys2 = Object.keys(o2);
    if (objKeys1.length !== objKeys2.length) return false;
  
    for (let key of objKeys1) {
      const value1 = o1[key];
      const value2 = o2[key];
      const isObjects = isObject(value1) && isObject(value2);
      if ((isObjects && !deepCompare(value1, value2)) ||
        (!isObjects && value1 !== value2)
      ) {
        return false;
      }
    }
    return true;
  };
const isObject = (object) => {
    return object != null && typeof object === "object";
  };

// or...

function deepCompare(o1, o2) { // i really like this one, and like to think its what i wouldve done if i didnt look up a soln, but cant be certain
    if (o1 === o2) return true;
    if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;
    var keys = Object.keys(o1);
    return keys.every(function(key) {
      return deepCompare(o1[key], o2[key]);
    });
  };