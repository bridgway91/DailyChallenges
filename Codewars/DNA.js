// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    return dna.split('').map(el => {
      if(el == 'A') {
        return 'T'
      } else if(el == 'T') {
        return 'A'
      } else if(el == 'C') {
        return 'G'
      } else if(el == 'G') {
        return 'C'
      }
    }).join('')
  }

// alternatively...
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  //Basically, /./g for string is what forEach is for array.
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

// more simply...
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}