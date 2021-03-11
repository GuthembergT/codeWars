//Odd or Even?
//https://www.codewars.com/kata/5949481f86420f59480000e7
function oddOrEven(array) {
    let result = array.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    
    return (result % 2 === 0 ? 'even' : 'odd')
  }