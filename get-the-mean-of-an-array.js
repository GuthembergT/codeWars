//Get the Mean of An Array
//https://www.codewars.com/kata/563e320cee5dddcf77000158
function getAverage(marks){
    return Math.floor(marks.reduce((a, e) => { return a+=e })/marks.length);
  }