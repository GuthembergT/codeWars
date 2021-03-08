//Find the Middle Element
//https://www.codewars.com/kata/545a4c5a61aa4c6916000755
var gimme = function (inputArray) {
    let min = Math.min(...inputArray),
        minEl = inputArray.indexOf(min),
        max = Math.max(...inputArray),
        maxEl = inputArray.indexOf(max),
        result;
    
    delete inputArray[minEl];
    delete inputArray[maxEl];
    
    inputArray.forEach(el => {
      if(typeof(el) == 'number')
        result = inputArray.indexOf(el);
    })
    return result;
  };