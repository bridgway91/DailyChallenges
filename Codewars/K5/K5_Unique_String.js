// There is an array of strings. All strings contains similar letters except one. Try to find it!
// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
// It’s guaranteed that array contains more than 2 strings.


function findUniq(arr) { // again rather simple, but solution looks kinda complex, simply stripped down each array element to the letters used, ordered them, then found the odd one out's index, and referred back to original
    let a = arr.map(e=>[... new Set(e.toLowerCase().replace(/ /g,''))].sort((m,n)=>m.localeCompare(n)).join(''))
    
    let c
    if(a[0] == a[1]) {
      c = a[0]
    } else {
      c = a[0] == a[2] ? a[0] : a[1]
    }
    
    for (let k of a) {
      if(k != c) return arr[a.indexOf(k)]
    }
  } // oh im dumb, couldve also found index where first indexOf != lastIndexOf ... >_<