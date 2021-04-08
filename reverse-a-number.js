//Reverse a Number
//https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
function reverseNumber(n) {
    var reverse, nStr = n.toString();
    if (n < 0) {
      reverse = '-';
      reverse += nStr.split('').reverse().join('').substring(0, nStr.length-1);
    }
    else
      reverse = nStr.split('').reverse().join('')
    return Number(reverse);
  }