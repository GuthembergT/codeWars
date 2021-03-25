//RGB to Hex Conversion
//https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b){
    let final = '';
    [r, g, b].forEach(color => {
      if (color <= 0)
        final += '00';
      else if (color >= 255)
        final += 'FF';
      else {
        let temp = ''
        for(i = color; i > 0;) {
          let remainder = i % 16;
          switch(remainder) {
              case 10: temp += 'A';break;
              case 11: temp += 'B';break;
              case 12: temp += 'C';break;
              case 13: temp += 'D';break;
              case 14: temp += 'E';break;
              case 15: temp += 'F';break;
              default: temp += remainder;
          }
          i = Math.floor(i / 16);
          temp += (i === 0 && temp.length === 1) ? 0 : '';
        }
        final += temp.split('').reverse().join('');
      }
    })
    return final;
  }