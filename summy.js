//Summy
//https://www.codewars.com/kata/599c20626bd8795ce900001d
function summy(stringOfInts){
    return stringOfInts.split(' ').reduce((acc, el) => { return acc += parseInt(el) }, 0 )
}