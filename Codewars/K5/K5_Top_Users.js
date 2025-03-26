// A website named "All for Five", sells many products to registered clients that cost all the same (5 dollars, the price is not relevant). Every user receives an alphanumeric id code, like D085. The page tracks all the purchases, that the clients do. For each purchase of a certain client, his/her id user will be registered once.
// You will be given an uncertain number of arrays that contains strings (the id code users). Each array will represent the purchases that the users do in a month. You should find the total number of purchases of the users that have bought in all the given months (the clients that their id code are present in all the arrays). e.g.:
// a1 = ['A042', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042']
// a3 = ['A042', 'A025', 'B004']

// The result will be:
// 'A042'---> 5 times
// 'A025'---> 3 times
// 'B004'---> 3 times
// It may be that not even a single user has purchased in all the months
// a1 = ['A043', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044']
// a3 = ['A041', 'A026', 'B005']
// Even though '0042' is present in two arrays, is not present in all the arrays.

// The function that solves this challenge will be called as: id_best_users().

// The entries of the function and the output for the cases above will be:
// a1 = ['A042', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042']
// a3 = ['A042', 'A025', 'B004']
// id_best_users(a1, a2, a3) == [[5, ['A042']], [3, ['A025', 'B004']]]
// a1 = ['A043', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044']
// a3 = ['A041', 'A026', 'B005']
// id_best_users(a1, a2, a3) == []

// As you can see the output will have the total number of purchases in decreasing order. If two users have the same amount of total purchases, they will be sorted by their id user string value.

// More examples will be given in the example tests.

// Features of the Random Tests:
// Low Performance Tests
// maximum amount of users: 200
// maximum number of months: 8
// maximum amount of purchases per month: 100
// High Performance Tests
// maximum amount of users: 90000
// maximum number of months: 12
// maximum amount of purchases per month: 80000


function idBestUsers(...a) { // so... everything commented out below was my initial approach, which mostly worked but then had time-out issues iirc, then trying again was becoming too much of a pain, so i skipped to looking at the soln...
    console.log(a) // a = [ [month-1] , [month-2] , [month-3] , ... ]
    let unique = a.map(e=>[...new Set(e)]).flat()
    console.log(unique)
    let count = {}
    unique.forEach(e=>{
      count[e] = count[e] ? count[e]+1 : 1
    })
    console.log(count)
    console.log(a.filter(e=>count[e]==a.length))
  }
///////////////
//   let purchases = {} // each is 'id' : [months found, total purchases]
//   a.forEach((arr,m)=>{
//     if(m==0) {
//       arr.forEach(e=>{
//         purchases[e] = purchases[e] ? [m+1,purchases[e][1]+1] : [m+1,1]
//       })
//     } else {
//       arr.forEach(e=>{
//         if(purchases[e]) {
//           purchases[e] = [m+1, purchases[e][1]+1]
//         }
//       })
//     }
//   })
//   console.log(purchases)
//   let top = {}
//   for (let id of Object.keys(purchases)) {
//     if(purchases[id][0] == a.length) {
//       if(top[purchases[id][1]]) {
//         top[purchases[id][1]].push(id)
//       } else {
//         top[purchases[id][1]] = [id]
//       }
//     }
//   }
//   console.log(top)
//   let res = []
//   for (let p of Object.keys(top)) {
//     res.push([+p,top[p]])
//   }
//   console.log(res,'\n\n')
//   return res.sort((a,b)=>b[0]-a[0]).map(e=>[e[0],e[1].sort((a,b)=>a.localeCompare(b))])

// or...

function idBestUsers(...args) {
    let data = args; // reminder: data will be an array of arrays, so [ [.] , [.] , [.] , ... ]
    let counts = {};
    let users = {};
    data.forEach((month, index) => {
      month.forEach(user => {
        if (!users[user]) users[user] = { months: {}, count: 0 }
        users[user].months[index] = true;
        users[user].count += 1;
      })
    })
    for (user in users) {
      let allMonths = Object.keys(users[user].months).length === data.length
      if (allMonths) {
        if (!counts[users[user].count]) counts[users[user].count] = [];
        counts[users[user].count].push(user);
      }
    }
    
    let result = [];
    for (count in counts) {
      result.unshift([Number(count), counts[count].sort()]);
    }
    
    return result;
}