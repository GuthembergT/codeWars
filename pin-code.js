//Regex Validation Code
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
    if (pin.length === 4 || pin.length === 6) {
      for(i = 0; i < pin.length; i++) {
        let digit = pin[i];
        if(digit.charCodeAt(0) < 48 || digit.charCodeAt(0) > 57)
          return false;
      }
      return true;
    }
    return false;
  }