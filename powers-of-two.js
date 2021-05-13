//Powers of Two
//https://www.codewars.com/kata/57a083a57cb1f31db7000028
function powersOfTwo(n){
    let result = [];
    for(i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
}