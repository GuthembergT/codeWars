//Sum the Strings
//https://www.codewars.com/kata/5966e33c4e686b508700002d
function sumStr(a,b) {
    if(a === '' && b === '')
      return '0';
    else if(a === '')
      return b;
    else if(b === '')
      return a;
    return (parseInt(a) + parseInt(b)).toString();
}