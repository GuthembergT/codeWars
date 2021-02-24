//Sum of Digits/Digital Root
//https://www.codewars.com/kata/541c8630095125aba6000c00
function digital_root(n) {
  
    let total = 0;
    
    do {
      if (total >= 10){
        n = total;
        total = 0;
      }
      let nInString = n.toString();
      for (i = 0; i < nInString.length; i ++) {
        console.log(nInString[i]);
        total += Number(nInString[i]);
      }
    } while (total >= 10);
  
    return total;
  }