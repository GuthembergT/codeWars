//Multiplication Table for Number
//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
function multiTable(number) {
    let str = '';
    for(i = 1; i <= 10; i++) {
      str += `${i} * ${number} = ${i *  number}${i < 10 ? '\n' : ''}`;
    }
    return str;
}