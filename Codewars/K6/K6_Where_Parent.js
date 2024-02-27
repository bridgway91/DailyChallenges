// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".


function findChildren(dancingBrigade) { // localeCompare puts lowercase first, so just reversed the order in cases where the letter was the same to get the capitals to the front
    return dancingBrigade.split('').sort((a,b)=>{
        if (a.toUpperCase() == b.toUpperCase()) {
        return b.localeCompare(a)
        } else {
        return a.localeCompare(b)
        }
    }).join('')
}


// alternatively...


function findChildren(dancingBrigade){ // did not notice that localeCompare accepted other arguments... a bit confusing though, apparently "kf" allows access to the 'caseFirst' sorting option
    return dancingBrigade.split("")
                         .sort((a,b)=>a.localeCompare(b,"kf",{caseFirst:"upper"}))
                         .join("");
    
  };