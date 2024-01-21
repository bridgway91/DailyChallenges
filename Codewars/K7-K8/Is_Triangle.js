// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c) {
    let high = Math.max(a,b,c);
    if (a+b+c-high <= high) { // the sum of the smallest sides needs to exceed the longest
      return false;
    } else {
      return true;
    }
  }

// alternatively...

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a; // i guess technically any 2 sides need to exceed the final side
}