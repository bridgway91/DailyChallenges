// I'm sure, you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. In this kata we want to implement something similar.
// You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). Your task is to find out, which word from the dictionary is most similar to the entered one. The similarity is described by the minimum number of letters you have to add, remove or replace in order to get from the entered word to one of the dictionary. The lower the number of required changes, the higher the similarity between each two words.
// Same words are obviously the most similar ones. A word that needs one letter to be changed is more similar to another word that needs 2 (or more) letters to be changed. E.g. the mistyped term berr is more similar to beer (1 letter to be replaced) than to barrel (3 letters to be changed in total).
// Extend the dictionary in a way, that it is able to return you the most similar word from the list of known words.

// Code Examples:
// fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
// fruits.findMostSimilar('strawbery'); // must return "strawberry"
// fruits.findMostSimilar('berry'); // must return "cherry"
// things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
// things.findMostSimilar('coddwars'); // must return "codewars"
// languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
// languages.findMostSimilar('heaven'); // must return "java"
// languages.findMostSimilar('javascript'); // must return "javascript" (identical words are obviously the most similar)

// I know, many of you would disagree that java is more similar to heaven than all the other ones, but in this kata it is ;)
// Additional notes:
// there is always exactly one possible correct solution


class Dictionary { // so.. my thoughts were to just to a comparison of # similar letters and return most similar, but apparently that's not what the problem was going for... and this actually seems like something that may be nice to know in the future... but im not going to bother adding this to an anki... because... i dont feel like it... =/
  constructor(words) {
    this.words = words;
  }

  // Computes Levenshtein distance between a and b
  static levenshtein(a, b) {
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    // distance[y][x]
    const distance = Array(b.length + 1).fill(null).map(() =>
      Array(a.length + 1).fill(null)
    );

    // Fill first row and column
    for (let i = 0; i <= a.length; i++) distance[0][i] = i;
    for (let j = 0; j <= b.length; j++) distance[j][0] = j;

    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        distance[j][i] = Math.min(
          distance[j - 1][i] + 1,         // deletion
          distance[j][i - 1] + 1,         // insertion
          distance[j - 1][i - 1] + cost   // substitution
        );
      }
    }

    return distance[b.length][a.length];
  }

  findMostSimilar(target) {
    let bestWord = null;
    let bestDist = Infinity;

    for (const word of this.words) {
      const dist = Dictionary.levenshtein(target, word);
      if (dist < bestDist) {
        bestDist = dist;
        bestWord = word;
      }
    }

    return bestWord;
  }
}
