//A Gift Well Spent
//https://www.codewars.com/kata/54554846126a002d5b000854
var buy = function(x, arr){
    var pieces = [];
    for(i = 0; i < arr.length; i++) {
      for(j = 0; j < arr.length; j++) {
        if(i !== j && arr[i] + arr[j] === x && pieces.length < 2){
          pieces.push(i, j);
          break;
        }
      }
    }
    return (pieces.length < 1) ? null : pieces;
  };