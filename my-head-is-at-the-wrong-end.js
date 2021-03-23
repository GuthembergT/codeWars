//My head is at the wrong end!
//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
function fixTheMeerkat(arr) {
    if (arr.length >= 3 && arr.length % 3 === 0) {
      for(i = 0; i < arr.length; i++) {
        if (i === Math.ceil(arr.length/2)){
          let temp = arr[i];
          arr[i] = arr[arr.length-i-1]
          arr[arr.length-i-1] = temp;
        }
      }
    }
    return arr;
  }