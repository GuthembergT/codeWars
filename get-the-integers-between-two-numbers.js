//Get the Integers Between Two Numbers
//https://www.codewars.com/kata/598057c8d95a04f33f00004e
function range(startNum, endNum)   
{  
  var arr = [];
  for(i = startNum+1; i < endNum; i++)
    arr.push(i);
  return arr;
};