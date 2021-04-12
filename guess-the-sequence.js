//Guess the Sequence
//https://www.codewars.com/kata/5b45e4b3f41dd36bf9000090
function sequence(x) {
    var arr = [];
    for(i = 1; i <= x; i++) {
      arr.push(i);
    }
    return arr.sort();
  }