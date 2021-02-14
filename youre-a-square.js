//You're a square!
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e
var isSquare = function(n){
    if( n === 0 || (n % Math.sqrt(n) === 0) )
      return true;
    else
      return false; // fix me
  }