//Sort and Star
//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
function twoSort(s) {
    let result = '';
    s.sort()[0].split('').forEach((char, index) => { if (index < s[0].length-1) result += char + '***'})
    result += s[0][s[0].length-1];
    return result;
  }