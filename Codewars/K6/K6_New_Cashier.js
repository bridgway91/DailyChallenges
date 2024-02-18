// Some new cashiers started to work at your restaurant.
// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:
// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
// Their preference is to get the orders as a nice clean string with spaces and capitals like so:
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.
// The menu items are fairly simple, there is no overlap in the names of the items:
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke


function getOrder(input) { // fun attempt to get more familiar with regex
    const menu = ['Burger','Fries','Chicken','Pizza','Sandwich','Onionrings','Milkshake','Coke']
    let order = []
    for (let item of menu) {
      let regex = new RegExp("(?:" + item.toLowerCase() + ")","g")
      let found = input.match(regex)
      if (found) order = order.concat(found)
    }
    return order.map(e=>e[0].toUpperCase() + e.slice(1)).join(' ')
  }


// alternatively...

const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1);
const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);
function getOrder(input) {
  return input.match(new RegExp(menu.join("|"), "ig")).map(capitalize).sort(comparator).join(" "); // apparently regex couldve also been /[Burger|Fries|Chicken...]/gi, also smart to then sort by menu index
}


// one line from another soln, just to grab regex example
let reg = /(burger)|(fries)|(chicken)|(pizza)|(sandwich)|(onionrings)|(milkshake)|(coke)/g;


function getOrder(input) { // basically ideal version of my solution method, I feel... though it is a little hard to read
    const m = "burger|fries|chicken|pizza|sandwich|onionrings|milkshake|coke"
    return input.match(RegExp(m,'g')).sort((a,b)=>m.indexOf(a)-m.indexOf(b)).map(e=>e[0].toUpperCase()+e.slice(1)).join` `;
  }