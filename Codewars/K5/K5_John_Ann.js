// John and his wife Ann have decided to go to Codewars. On the first day Ann will do one kata and John - he wants to know how it is working - 0 kata.
// Let us call a(n) - and j(n) - the number of katas done by Ann - and John - at day n. We have a(0) = 1 and in the same manner j(0) = 0.

// They have chosen the following rules:
// On day n the number of katas done by Ann should be n minus the number of katas done by John at day t, t being equal to the number of katas done by Ann herself at day n - 1
// On day n the number of katas done by John should be n minus the number of katas done by Ann at day t, t being equal to the number of katas done by John himself at day n - 1

// Whoops! I think they need to lay out a little clearer exactly what there're getting themselves into!
// Could you write:
// functions ann(n) and john(n) that return the list of the number of katas Ann/John does on the first n days;
// functions sum_ann(n) and sum_john(n) that return the total number of katas done by Ann/John on the first n days

// Examples:
// john(11)  -->  [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
// ann(6)    -->  [1, 1, 2, 2, 3, 3]
// sum_john(75)  -->  1720
// sum_ann(150)  -->  6930

// Note:
// Keep an eye on performance.


function ann(n) { // couldnt not figure out for myself, got a basic function going but it wasn't lining up with the #s in example, eventually realized I was counting day 0 as day 1... whoops... still needed help translating that function to code, but then the sums are easy enough
  let annList = [1, 1];
  let johnList = [0, 0];
  for (let i = 2; i < n; i++) {
    let annToday = i - johnList[annList[i - 1]];
    annList.push(annToday);
    let johnToday = i - annList[johnList[i - 1]];
    johnList.push(johnToday);
  }
  return annList.slice(0, n);
}
function john(n) {
  let annList = [1, 1];
  let johnList = [0, 0];
  for (let i = 2; i < n; i++) {
    let annToday = i - johnList[annList[i - 1]];
    annList.push(annToday);

    let johnToday = i - annList[johnList[i - 1]];
    johnList.push(johnToday);
  }
  return johnList.slice(0, n);
}
function sumAnn(n) {
  return ann(n).reduce((a, b) => a + b, 0);
}
function sumJohn(n) {
  return john(n).reduce((a, b) => a + b, 0);
}