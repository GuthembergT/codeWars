//All Unique
//https://www.codewars.com/kata/553e8b195b853c6db4000048
function hasUniqueChars(str){
    for(i = 0; i < str.length; i++)
      for(j = 0; j < str.length; j++)
        if(j !== i && str[j] === str[i])
          return false;
    return true;
  }