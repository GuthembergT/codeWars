//Count Characters in Your String
//https://www.codewars.com/kata/52efefcbcdf57161d4000091
function count (string) {
    if (string === '')
     return {};
    
    let counted = [],
        final = {};
    for(i = 0; i < string.length; i++) {
      let occurence = 0;
      if(counted.includes(string[i])) i++
      for(j = 0; j < string.length; j++)
        if (string[i] === string[j]) occurence++;
      final[string[i]] = occurence;
    }
    return final;
  }