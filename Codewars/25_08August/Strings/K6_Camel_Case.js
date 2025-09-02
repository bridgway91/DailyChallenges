// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){ // long but still 1 line, simple, also NO REGEX
  return str.replace(/-/g,'_').split('_').map((e,i)=> i==0 ? e : e[0].toUpperCase()+e.slice(1)).join('')
}