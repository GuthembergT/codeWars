//Two Oldest Ages
//https://www.codewars.com/kata/511f11d355fe575d2c000001
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let sorted = ages.sort((a, b) => { return b - a; });
    return [sorted[1], sorted[0]];
  }