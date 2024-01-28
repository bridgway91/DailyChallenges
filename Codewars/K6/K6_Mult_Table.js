// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]


multiplicationTable = function(size) { // a bit drawn out, but also the clearest way i could think to work through it, and it worked first time, so yay
    let table = []
    
    const first = Array.from(Array(size).keys()).map(e=>e+1)
    table.push(first)
    
    for (let i=2; i <= size; i++) {
      let row = Array(size)
      for (let j=0; j<size; j++) {
        row[j] = i + i*j
      }
      table.push(row)
    }
    
    return table
  }



// alternatively...

multiplicationTable = function(size) { // well i feel dumb
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }

const multiplicationTable = n => {
    const res = [];
    for (let i = 1; i <= n; i++) {
      const row = [];
      for (let j = 1; j <= n; j++)
        row.push(i * j);
      res.push(row);
    }
    return res;
  }