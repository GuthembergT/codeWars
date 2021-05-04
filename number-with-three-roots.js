//Number with 3 Roots
//https://www.codewars.com/kata/5932c94f6aa4d1d786000028
function perfectRoots(n){
    for(i = 1; i < 4; i++) {
      n = Math.sqrt(n);
    }
    return Number.isInteger(n);
}