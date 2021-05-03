//Stringy Strings
//https://www.codewars.com/kata/563b74ddd19a3ad462000054
function stringy(size) {
    let str = '';
    for(i = 1; i <= size; i++) {
      str += i % 2 === 0 ? '0' : '1'
    }
    return str;
}