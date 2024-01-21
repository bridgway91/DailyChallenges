// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) { // admittedlty I looked up the general solution while away from laptop, original planned solution involved a string split then testing each variable... actually would have looked similar to this once I worked through it all
    return Array.from(str).map((el,ind)=>{
      if (el == Number(el)) {
        return ''
      } else {
        return (el === el.toUpperCase())
        ? (ind !== 0 ? `-${el.toLowerCase()}` : `${el.toLowerCase()}`)
        : `${el}`
      }
    }).join('')
  }


// alternatively...


function kebabize(str) { // pretty much all other solutions involved regex (and apparently are generally faster)
    return str.replace(/[^a-z]/ig, '').
           replace(/^[A-Z]/, c => c.toLowerCase()).
           replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
  }