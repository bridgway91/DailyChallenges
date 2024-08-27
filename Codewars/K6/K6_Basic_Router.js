// In this Kata, you have to design a simple routing class for a web framework.
// The router should accept bindings for a given url, http method and an action.
// Then, when a request with a bound url and method comes in, it should return the result of the action.

// Example usage:
// var router = new Router;
// router.bind('/hello', 'GET', function(){ return 'hello world'; });
// router.runRequest('/hello', 'GET') // returns 'hello world';

// When asked for a route that doesn't exist, router should return:
// 'Error 404: Not Found'

// The router should also handle modifying existing routes. See the example tests for more details.


class Router { // took from a previous soln, couldnt get myself, but my thinking was pretty close... was gonna try and set up an object that would hold the needed data, just hadnt yet figured out how to get all 3 pieces of data in (smart to just pair the first two with a colon ':'), and then the bigger problem that i didnt know how to dynamically add in data sets from bind to the object... as far as i know there's no .push() equivalent... so apparently Map() can be used to fit in these types of situations... basically an object which allows you to use .set() to add in a (key,value) pair
    
    constructor() {
        this.routes = new Map();
    }  
        
    bind(url, method, action) {
        this.routes.set(url + ":" + method, action);
    }
    
    runRequest(url, method) {
        if (!this.routes.has(url + ":" + method)) {
            return "Error 404: Not Found";
        }
        return this.routes.get(url + ":" + method)();
    }
    
}