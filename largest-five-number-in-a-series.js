//Largest 5 Numbers in a Series
//https://www.codewars.com/kata/51675d17e0c1bed195000001
function solution(digits){
    let x = 0; digits = digits.split('');
    digits.forEach((n, i) => { if(parseInt(digits.slice(i, i+5).join('')) > x) x = parseInt(digits.slice(i, i+5).join(''));})
    return x;
  }