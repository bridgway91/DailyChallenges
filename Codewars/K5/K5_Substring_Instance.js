// Complete the solution so that it returns the number of times the search_text is found within the full_text.
// searchSubstr( fullText, searchText, allowOverlap = true )
// so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:
// searchSubstr('aa_bb_cc_dd_bb_e', 'bb') // should return 2 since bb shows up twice
// searchSubstr('aaabbbcccc', 'bbb') // should return 1
// searchSubstr( 'aaa', 'aa' ) // should return 2
// searchSubstr( 'aaa', '' ) // should return 0
// searchSubstr( 'aaa', 'aa', false ) // should return 1


function searchSubstr(fullText, searchText, allowOverlap = true) { // problem seemed to want regex, but best solution is actually without using it... just looping through the fulltext to look for the search, then increasing starting index by 1 (or found index+1)
  if (!searchText) return 0;

  let count = 0;
  let i = 0;

  while (i <= fullText.length - searchText.length) {
    const foundAt = fullText.indexOf(searchText, i);
    if (foundAt === -1) break;

    count++;
    i = foundAt + (allowOverlap ? 1 : searchText.length);
  }

  return count;
}