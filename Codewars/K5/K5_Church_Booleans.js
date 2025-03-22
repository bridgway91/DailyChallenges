// In lambda calculus, the only primitive are lambdas. No numbers, no strings, and of course no booleans. Everything is reduced to anonymous functions.
// Booleans are defined thusly (this definition is preloaded for you) :
// const True = T => F => T;
// const False = T => F => F;
// Your task will be to implement basic operators on booleans (using only lambdas and function application) : Not, And, Or and Xor.

// To help, the function unchurch comes preloaded, and returns the native boolean given a church boolean :
// unchurch(True); //true;

// Note: You should not use the following:
// numbers
// strings
// booleans
// boolean operators
// objects (curly brackets) or arrays (square brackets)
// regexp
// "new"


// Another problem where I didnt really understand what to do, got help from chatGPT... understand this one better than yesterday's, but still...

// NOT: Flips the boolean value
// If A is True, it returns False. If A is False, it returns True.
const Not = A => A(False)(True);
// Explanation:
// - A(False)(True) means we apply A to False and True.
// - If A is True: True(False)(True) → False
// - If A is False: False(False)(True) → True

// AND: Returns True only if both A and B are True
// If A is False, it returns False immediately. Otherwise, it returns B.
const And = A => B => A(B)(A);
// Explanation:
// - A acts as a gatekeeper. 
// - If A is True: True(B)(A) → B (result depends on B)
// - If A is False: False(B)(A) → False (ignores B)

// OR: Returns True if at least one input is True
// If A is True, it returns True immediately. Otherwise, it returns B.
const Or = A => B => A(A)(B);
// Explanation:
// - If A is True: True(A)(B) → True
// - If A is False: False(A)(B) → B (result depends on B)

// XOR: Returns True if exactly one input is True
const Xor = A => B => A(Not(B))(B);
// Explanation:
// If A is True → It returns Not(B)
//    True(Not(B))(B) → Not(B)
//    So if B is True, it returns False.
//    If B is False, it returns True.
// If A is False → It returns B
//    False(Not(B))(B) → B
//    It just directly returns the value of B.

// or...
// another way of reading the logic...
const Not = A => /*if*/A/*then*/(False)/*else*/(True)
const And = A => B => /*if*/A/*then*/(B)/*else*/(False);
const Or = A => B => /*if*/A/*then*/(True)/*else*/(B);
const BOOL_EQ = A => B => /*if*/A/*then*/(B)/*else*/(Not(B));
const Xor = A => B => /*if*/Not(BOOL_EQ(A)(B))