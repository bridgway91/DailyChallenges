// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)


String.prototype.camelCase=function(){ // VERY ANNOYING that this problem is done by adding a method to prototype, shouldve just been a function... also annoying that return line doesnt work for blank strings
    if (this == '') return ''
    return this.toLowerCase().split(' ').map(e=>e[0] = e[0].toUpperCase()+e.slice(1)).join('')
  }


// alternatively...

String.prototype.camelCase=function(){ // why the fuck does this one work when my 1-liner didnt? is it b/c of the .charAt(0) ??? comment says it doesnt work similar to my original attempt
    return this.split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
 }


 String.prototype.camelCase = function () { // regex method, still dont understand, maybe one day i will
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
  }