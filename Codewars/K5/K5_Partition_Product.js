// You are given a certain integer, n, n > 0. You have to search the partition or partitions, of n, with maximum product value.

// Let'see the case for n = 8.

// Partition                 Product
// [8]                          8
// [7, 1]                       7
// [6, 2]                      12
// [6, 1, 1]                    6
// [5, 3]                      15
// [5, 2, 1]                   10
// [5, 1, 1, 1]                 5
// [4, 4]                      16
// [4, 3, 1]                   12
// [4, 2, 2]                   16
// [4, 2, 1, 1]                 8
// [4, 1, 1, 1, 1]              4
// [3, 3, 2]                   18   <---- partition with maximum product value
// [3, 3, 1, 1]                 9
// [3, 2, 2, 1]                12
// [3, 2, 1, 1, 1]              6
// [3, 1, 1, 1, 1, 1]           3
// [2, 2, 2, 2]                16
// [2, 2, 2, 1, 1]              8
// [2, 2, 1, 1, 1, 1]           4
// [2, 1, 1, 1, 1, 1, 1]        2
// [1, 1, 1, 1, 1, 1, 1, 1]     1
// So our needed function will work in that way: If there is only one partition with maximum product value, it will return a list of two elements, the unique partition and the product value.

// Example (input -> output)
// 8 -> [[3, 3, 2], 18]
// If there are more than one partition with maximum product value, the function should output the partitions in a length sorted way.

// Example (input -> output)
// 10 --> [[4, 3, 3], [3, 3, 2, 2], 36]
// Enjoy it!

function findPartMaxProd(n) { // got halfway done myself, chatgpt helped finish
    // 1. Compute the maximum product for n using the math trick
    const maxProduct = computeMaxProduct(n);
    const maxProductPartitions = [];
    // 2. Helper function to recursively generate partitions
    function helper(target, max, prefix) {
      // 3. Base case: when target becomes 0, we have a complete partition
      if (target === 0) {
        // 4. Calculate the product of this partition
        const product = prefix.reduce((a, b) => a * b, 1);
        // 5. If the product matches the max product, store the partition
        if (product === maxProduct) { maxProductPartitions.push(prefix) }
        return;
      }
      // 6. Try to subtract all numbers from target, ensuring the order is non-increasing
      for (let i = Math.min(max, target); i >= 1; i--) {
        // 7. Recursively build the partition by reducing the target and adding i to the current partition
        helper(target - i, i, [...prefix, i]);
      }
    }
    // 8. Start the partition generation from n
    helper(n, n, []);
    // 9. Return the list of partitions with the max product and the max product value
    return [...maxProductPartitions, maxProduct];
  }
  // This function calculates the maximum possible product for n using the math trick
  function computeMaxProduct(n) {
    if (n === 0) return 0;   // Base case for 0
    if (n === 1) return 1;   // Base case for 1
    if (n === 2) return 2;   // Base case for 2
    let product = 1;
    // Special case for n % 3 === 1 (replace 3 + 1 with 4 to get a higher product)
    if (n % 3 === 1) {
      product *= 4;
      n -= 4;
    } 
    // Case for n % 3 === 2 (just use a 2 to make the sum divisible by 3)
    else if (n % 3 === 2) {
      product *= 2;
      n -= 2;
    }
    // 10. Use as many 3's as possible for the remaining value of n
    while (n > 0) {
      product *= 3;
      n -= 3;
    }
    return product;
  }
  