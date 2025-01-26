// Your goal is to write an Event constructor function, which can be used to make event objects.

// An event object should work like this:
// it has a .subscribe() method, which takes a function and stores it as its handler
// it has an .unsubscribe() method, which takes a function and removes it from its handlers
// it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments

// As this is an elementary example of events, there are some simplifications:
// all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
// you should not worry about the order of handlers' execution
// the handlers will not attempt to modify an event object (e.g. add or remove handlers)
// the context of handlers' execution is not important
// each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again

// Also see an example test fixture for suggested usage


class Event { // similar to yesterday, something im not really familiar with, but managed to work out with some trial-n-error.. was a little unsure whether to store the functions in an array or object, object makes for easier removal, but idk if it could find the functions properly (also the iteration of emit() would be more complicated)... this did make unsubscribe() a bit annoying
    constructor() {
      this.functions = []
    }
    subscribe(fn) {
      this.functions.push(fn)
    }
    unsubscribe(fn) {
      let i = this.functions.indexOf(fn)
      let a = this.functions.slice(0,i)
      let b = this.functions.slice(i+1)
      this.functions = a.concat(b)
    }
    emit() {
      for (let f of this.functions) {
        f(...arguments)
      }
    }
  }

// or

class Event { // oooo... i dont make use of Set or Map nearly at all, and i really should start, looks like it could be very useful in certain setups
    constructor() {
      this.subscribers = new Set();
    }
    subscribe(func) {
      this.subscribers.add(func);
    }
    unsubscribe(func) {
      this.subscribers.delete(func);
    }
    emit(...args) {
      this.subscribers.forEach(s => s(...args));
    }
  }