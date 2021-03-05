//Two to One
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac
function longest(s1, s2) {
  
    result = [];
    
    for (char of s1) {
      if (!result.includes(char))
        result.push(char);
    }
    
    for (char of s2) {
      if (!result.includes(char))
        result.push(char);
    }
    result.sort();
    result = result.toString().replace(/,/g, '');
    return result;
  }