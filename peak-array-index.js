//Peak Array Index
//https://www.codewars.com/kata/5a61a846cadebf9738000076
function peak(arr){
    let sumLeft = 0, sumRight = 0, index = -1;
    for(i = 0, j = arr.length-1; i < arr.length;) {
      if(sumLeft === sumRight && i === j && i > 0) {
        index = i;
        return index;
      }
      else if(sumLeft > sumRight) {
        sumRight += arr[j];
        j--;
      }
      else if(sumLeft < sumRight) {
        sumLeft += arr[i];
        i++;
      }
      else{
        sumLeft += arr[i];
        sumRight += arr[j];
        j--;
        i++;
      }
    }
    return index;
  }