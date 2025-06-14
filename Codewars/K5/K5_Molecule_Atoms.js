// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

// For example:
// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}
// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}
// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

// As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.
// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.


function parseMolecule(formula) { // used cgpt, i mostly understood the steps you'd need to take, but wrapping my head around actually implementing those steps was proving difficult (if i actually dug down and started solving it on my own line-by-line i probably couldve eventually gotten it, just wouldve taken forever)
  // Main parsing function that handles a segment of the formula
  function parse(str) {
    let counts = {}; // This will store element counts
    let i = 0;       // Position in the string

    while (i < str.length) {
      let char = str[i];

      // --- HANDLE GROUPS (like (....), [....], {....}) ---
      if (char === '(' || char === '[' || char === '{') {
        let open = char;
        let close = { '(': ')', '[': ']', '{': '}' }[open];
        let depth = 1; // Track nested groups
        let sub = '';
        i++; // Move past the opening bracket

        // Extract everything inside this group (handles nesting)
        while (i < str.length && depth > 0) {
          if (str[i] === open) depth++;
          else if (str[i] === close) depth--;
          if (depth > 0) sub += str[i];
          i++;
        }

        // --- HANDLE MULTIPLIER AFTER GROUP ---
        let numStr = '';
        while (i < str.length && /\d/.test(str[i])) {
          numStr += str[i++];
        }
        let multiplier = numStr ? parseInt(numStr) : 1;

        // Recursively parse the inside of the group
        let subCounts = parse(sub);
        for (let el in subCounts) {
          counts[el] = (counts[el] || 0) + subCounts[el] * multiplier;
        }
      }

      // --- HANDLE ELEMENT SYMBOLS (like H, O, Mg, etc.) ---
      else if (/[A-Z]/.test(char)) {
        let name = char;
        i++;

        // Handle optional lowercase letters (e.g., "g" in "Mg")
        while (i < str.length && /[a-z]/.test(str[i])) {
          name += str[i++];
        }

        // Read number after the element (optional, may be > 1 digit)
        let numStr = '';
        while (i < str.length && /\d/.test(str[i])) {
          numStr += str[i++];
        }
        let count = numStr ? parseInt(numStr) : 1;

        // Add to total counts
        counts[name] = (counts[name] || 0) + count;
      }

      // --- SKIP ANY STRAY CHARACTERS (shouldn't happen, but safe) ---
      else {
        i++;
      }
    }

    return counts;
  }

  return parse(formula);
}
