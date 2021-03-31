//Tap Code Translation
//https://www.codewars.com/kata/605f5d33f38ca800322cb18f
function tapCodeTranslation(text) {
    var textToArr = text.split('');
    var coded = '';
    textToArr.forEach((el, i) => {
      switch(el) {
        case 'a': case 'b': case 'c': case 'd': case 'e': case 'k': coded += ('. '); break;
        case 'f': case 'g': case 'h': case 'i': case 'j': coded += ('.. '); break;
        case 'l': case 'm': case 'n': case 'o': case 'p': coded += ('... '); break;
        case 'q': case 'r': case 's': case 't': case 'u': coded += ('.... '); break;
        case 'v': case 'w': case 'x': case 'y': case 'z': coded += ('..... '); break;
      }
      switch(el) {
        case 'a': case 'f': case 'l': case 'q': case 'v': coded += ('.'); break;
        case 'b': case 'g': case 'm': case 'r': case 'w': coded += ('..'); break;
        case 'c': case 'h': case 'n': case 's': case 'x': case 'k': coded += ('...'); break;
        case 'd': case 'i': case 'o': case 't': case 'y': coded += ('....'); break;
        case 'e': case 'j': case 'p': case 'u': case 'z': coded += ('.....'); break;
      }
      coded += (i < textToArr.length-1) ? ' ' : '';
    })
    return coded;
  }