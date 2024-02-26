// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"


function balance(left,right){
    const leftCount = (left.split('').filter(e=>e=='?').length * 3) + (left.split('').filter(e=>e=='!').length * 2)
    const rightCount = (right.split('').filter(e=>e=='?').length * 3) + (right.split('').filter(e=>e=='!').length * 2)
    if (leftCount > rightCount) return 'Left'
    if (leftCount < rightCount) return 'Right'
    if (leftCount == rightCount) return 'Balance'
  }


// alternatively...


function balance(left,right){ // i liked the definitions used, specifically the [...X] parts, always forget that's an option
    l=[...left].reduce((s,a)=>s+(a=='?'?3:2),0);
    r=[...right].reduce((s,a)=>s+(a=='?'?3:2),0);
    return l==r?"Balance":l>r?"Left":"Right"
 }