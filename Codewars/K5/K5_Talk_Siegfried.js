// Write the function siegfried to replace the letters of a given sentence.
// Apply the rules using the course notes below. Each week you will learn some more rules.
// Und by ze fifz vek yu vil be speakink viz un aksent lik Siegfried viz no trubl at al!

// Lessons
// Week 1
    // ci -> si
    // ce -> se
    // c -> k (except ch leave alone)
// Week 2
    // ph -> f
// Week 3
    // remove trailing e (except for all 2 and 3 letter words)
    // replace double letters with single letters (e.g. tt -> t)
// Week 4
    // th -> z
    // wr -> r
    // wh -> v
    // w -> v
// Week 5
    // ou -> u
    // an -> un
    // ing -> ink (but only when ending words)
    // sm -> schm (but only when beginning words)

// Notes
// The transformations described in the "Lessons" are case-insensitive
// The output must retain the case of the original sentence
// Apply rules strictly in the order given above
// Rules are cummulative. So for week 3 first apply week 1 rules, then week 2 rules, then week 3 rules


var siegfried = function(week,str) { // god damn that's long... yeah, took a bit, but possibly due to work being busy, and the lack of supplied early tests made it annoying to check for issues
    if(week==1) str = w1(str)
    if(week==2) str = w2(w1(str))
    if(week==3) str = w3(w2(w1(str)))
    if(week==4) str = w4(w3(w2(w1(str))))
    if(week==5) str = w5(w4(w3(w2(w1(str)))))
    return str
  }
  const w1 = (str)=>{
    str = str.replace(/(ci)/gmi,createReplacer('si'))
    str = str.replace(/(ce)/gmi,createReplacer('se'))
    str = str.replace(/c(?=[^h])/gmi,createReplacer('k'))
    return str
  }
  const w2 = (str)=>{
    str = str.replace(/(ph)/gmi,createReplacer('f'))
    return str
  }
  const w3 = (str)=>{
    str = str.split(/(\b|-)/).map(e => e.length > 3 ? e.replace(/e+$/gi, '') : e).join('');
    str = str.replace(/([a-zA-Z])\1+/gmi, "$1")
    return str
  }
  const w4 = (str)=>{
    str = str.replace(/(th)/gmi,createReplacer('z'))
    str = str.replace(/(wr)/gmi,createReplacer('r'))
    str = str.replace(/(wh)/gmi,createReplacer('v'))
    str = str.replace(/(w)/gmi,createReplacer('v'))
    return str
  }
  const w5 = (str)=>{
    str = str.replace(/(ou)/gmi,createReplacer('u'))
    str = str.replace(/(an)/gmi,createReplacer('un'))
    str = str.split(/(\b|-)/).map(e => e.replace(/ing\b/gi, createReplacer('ink'))).join('');
    str = str.split(/(\b|-)/).map(e => e.replace(/^sm/gi, createReplacer('schm'))).join('');
    return str
  }
  const createReplacer = replacement => match =>
    match === match.toUpperCase() ? replacement.toUpperCase() :
    match === match.toLowerCase() ? replacement.toLowerCase() :
    match[0] === match[0].toUpperCase() ? replacement[0].toUpperCase() + replacement.slice(1) :
    replacement;

// or...

var siegfried = function(week,str) { // a bit nicer looking than mine, didnt involve a replacer or separating out words, just added in replace methods to deal with the varying issues, like 'ci' and 'Ci' being two separate replaces..
  
    if (week >=1) {
      str = str.replace(/ci/g, 'si');
      str = str.replace(/Ci/g, 'Si');
      str = str.replace(/ce/g, 'se');
      str = str.replace(/Ce/g, 'Se');
      str = str.replace(/c(?!h)/g, 'k');
      str = str.replace(/C(?!h)/g, 'K');
    }
    
    if (week >=2) {
      str = str.replace(/ph/g, 'f');
      str = str.replace(/Ph/g, 'F');
    }
    
    if (week >=3) {
      str = str.replace(/(\w{3,})(e)\b/g, '$1');
      str = str.replace(/([a-zA-Z])\1/gi, '$1');
    }  
    
    if (week >=4) {
      str = str.replace(/th/g, 'z');
      str = str.replace(/Th/g, 'Z');
      str = str.replace(/wr/g, 'r');
      str = str.replace(/Wr/g, 'R');  
      str = str.replace(/wh/g, 'v');
      str = str.replace(/Wh/g, 'V'); 
      str = str.replace(/w/g, 'v');
      str = str.replace(/W/g, 'V');      
    }  
    
    if (week >=5) {
      str = str.replace(/ou/g, 'u');
      str = str.replace(/Ou/g, 'U');
      str = str.replace(/an/g, 'un');
      str = str.replace(/An/g, 'Un');    
      str = str.replace(/ing\b/g, 'ink');     
      str = str.replace(/\bSm/g, 'Schm');       
    }    
      
    return str;
  }