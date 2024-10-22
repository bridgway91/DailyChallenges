// In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

// However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

// Customers in the dictionary are represented as:
// { 'customerName' : [list_of_order_values_as_integers] }


function pizzaRewards(customers, minOrders, minPrice) { // took a bit till i figured out problem didnt actually want a "Set" involved, just an array worked fine... then it was having issues once everything was correct b/c i had console logs in that were taking up too much time/memory... annoying
    let freePizza = []
    for (let [key,val] of Object.entries(customers)) {
      let goodOrders = val.filter(e=>e>=minPrice)
      if(goodOrders.length >= minOrders) freePizza.push(key)
    }
  
    return freePizza
  }


// alternatively...

pizzaRewards = (customers, minOrders, minPrice) => // 1-line version, but i like mine, feel its more readable (at least to me it is)
    Object.keys(customers).filter(e=> customers[e].filter(o=> o >= minPrice).length >= minOrders); 