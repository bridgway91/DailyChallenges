// This time the input is a sequence of course-ids that are formatted in the following way:
// name-yymm
// The return of the function shall first be sorted by yymm, then by the name (which varies in length).


function sortme(arr) { // easy
  return arr.sort((a, b) => {
    const dateA = a.slice(-4);
    const dateB = b.slice(-4);
    if (dateA !== dateB) return dateA.localeCompare(dateB);
    
    const nameA = a.slice(0, -5);
    const nameB = b.slice(0, -5);
    return nameA.localeCompare(nameB);
  });
}
