// Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

// Example:
// 13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

// Hence the asnwer will be 2 (=13-11)


function minDistance(n){ // 99% sure there's a quicker way to get this
    let f = []
    for (let i=1; i<=Math.sqrt(n); i++) {
      if(n%i == 0){
        f.push(i)
        f.push(n/i)
      }
    }
    f = [...new Set(f.sort((a,b)=>a-b))]
  
    let min = Number.MAX_SAFE_INTEGER
    for (let i=0; i<f.length-2; i++) {
      min = Math.min(f[i+1]-f[i], min)
    }
    return Math.min(min,n-1)
  }

// alternatively...

function minDistance(n){ // while not declaring variables (bad), still points out that, since i only care about the factors right next to each other, i just need to keep track of the last one found, compare to current and adjust minimum if necessary, and repeat... could improve this one myself and be nearly ideal
    dmin = n;
    fprev = 1;
    for(i=2;i<=n;i++){
      if(n%i==0){
        dmin = Math.min(dmin, i - fprev)
        fprev = i
      }
    }
    return dmin;
  }