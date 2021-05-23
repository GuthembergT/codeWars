//Calculate Average
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
function find_average(array) {
    return array.length > 0 ? array.reduce((acc, el) => acc += el)/array.length : 0;
  }