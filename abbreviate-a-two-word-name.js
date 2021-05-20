//Abbreviate a Two Word Name
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
    name = name.split(' ');
    return `${name[0][0].toUpperCase()}.${name[1][0].toUpperCase()}`
  }