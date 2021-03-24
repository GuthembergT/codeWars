//Encrypt This!
//https://www.codewars.com/kata/5848565e273af816fb000449
var encryptThis = function(text) {
    let encrypted = '';
    text = text.split(' ');
    text.forEach( word => {
      encrypted += word.charCodeAt(0);
      if (word.length > 1) {
        encrypted += word[word.length-1];
        switch(word.length) {
          case 2: break;
          case 3: encrypted += word[1]; break;
          case 4: encrypted += word[2] + word[1]; break;
          default: encrypted += word.slice(2, word.length-1) + word[1];
        }
      }
      if (word !== text[text.length-1])
        encrypted += ' ';
    })
    return encrypted;
  }