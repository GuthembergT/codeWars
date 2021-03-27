//String Incrementer
//https://www.codewars.com/kata/54a91a4883a7de5d7800009c
function incrementString (strng) {
    let num = '', word = '';
    console.log(strng)
    for (c of strng)
      (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) ? num  += c : word += c
    
    return (num) ? word + incrementNumber(num) : word + 1;
  }
  
  function incrementNumber(n) {
    let numberForm = Number(n)+1, str = '';
      for(i = 0; i < n.length-numberForm.toString().length; i++)
        str += '0'
    return (str + numberForm.toString());
  }