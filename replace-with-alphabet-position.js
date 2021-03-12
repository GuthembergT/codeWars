//Replace with Alphabet Position
//https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(text) {
    let converted = '';
    for(i = 0; i < text.length; i++)
      (text.toLowerCase().charCodeAt(i) >= 97 && text.toLowerCase().charCodeAt(i) <= 122) ? converted += `${text.toLowerCase().charCodeAt(i) - 96} ` : false;
    return converted.slice(0, converted.length-1);
  }