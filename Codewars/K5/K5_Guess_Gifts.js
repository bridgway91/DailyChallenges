// You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}
// Your task is to return the names of all wishlisted presents that you might have gotten.

// Rules
// Possible values for size: "small", "medium", "large"
// Possible values for clatters: "no", "a bit", "yes"
// Possible values for weight: "light", "medium", "heavy"
// Don't add any item more than once to the result
// The order of names in the output doesn't matter
// It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

// Example
// var wishlist = [
//     {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
//     {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
//     {name: "Card Game", size: "small", clatters: "no", weight: "light"}
// ];
// var presents = [
//     {size: "medium", clatters: "a bit", weight: "medium"},
//     {size: "small", clatters: "yes", weight: "light"}
// ];
// guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]


function guessGifts(wishlist, presents) { // simple
  const possibleGifts = new Set();

  for (const present of presents) {
    for (const item of wishlist) {
      if (
        item.size === present.size &&
        item.clatters === present.clatters &&
        item.weight === present.weight
      ) {
        possibleGifts.add(item.name);
      }
    }
  }

  return [...possibleGifts];
}
