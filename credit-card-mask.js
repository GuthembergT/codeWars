//Credit Card Mask
//https://www.codewars.com/kata/5412509bd436bd33920011bc
// return masked string
function maskify(cc) {
    return cc.split('').map((el, i) => {return (i < cc.length-4) ? '#' : el}).join('');
  }