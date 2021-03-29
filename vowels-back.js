// Vowels Back
//https://www.codewars.com/kata/57cfd92c05c1864df2001563
function vowelBack(s){
    let str = '';
    s.split('').forEach(c => {
      let newL;
      switch(c.charCodeAt(0)) {
        case 97: case 105: case 117: newL = c.charCodeAt(0) - 5; break;
        case 99: case 111: newL = c.charCodeAt(0) - 1; break; 
        case 100: newL = c.charCodeAt(0) - 3; break;
        case 101: newL = c.charCodeAt(0) - 4; break;
        default: newL = c.charCodeAt(0) + 9; break;
      }
      if (newL > 122)
        newL -= 26;
      else if(newL < 97){
        let temp = 96 - newL;
        newL = 122 - temp;
      }
      if ((newL >= 99 && newL <= 101) || newL === 111)
        newL = c.charCodeAt(0);
      str += String.fromCharCode(newL);
    })
    return str;
  }