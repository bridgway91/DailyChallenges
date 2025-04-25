// For JavaScript: The kata is implemented via ES6 proxies in the preloaded function generate:

// const generate = (m,n)=>{
//   var hithandler = {
//     get: (_,col)=>col==n?true:false,
//     set: ()=>false
//   }
//   var misshandler = {
//     get: ()=>false, set: ()=>false
//   }
//   var hit = new Proxy({}, hithandler);
//   var miss = new Proxy({}, misshandler);
//   var rowhandler = {
//     get: (_,row)=>row==m?hit:miss,
//     set: ()=>false
//   };
//   var p = new Proxy({}, rowhandler);
//   return p;
// }

// You can use mat[j][i] normally to access "matrix" elements, which will be all false except when j = m and i = n. However, proxies behave entirely differently from arrays, so regular array methods will not work at all.


function findTrue(mat) { // was easy once i realized what was going on, notably this method is via CGPT where is basically a diagonal solution (think grid), my soln wouldve been an expanding square, but overall same effectiveness
    for (let sum = 0; ; sum++) {     // sum = row + col
      for (let row = 0; row <= sum; row++) {
        let col = sum - row;
        if (mat[row][col]) return [row, col];
      }
    }
  }