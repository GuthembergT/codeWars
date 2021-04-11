//Lost Number in Sequence
//https://www.codewars.com/kata/595aa94353e43a8746000120
function findDeletedNumber(arr, mixArr) {
    var missing;
    if (arr.length === mixArr.length)
        return 0;
    arr.forEach(el =>  {if (!mixArr.includes(el)) missing = el})
    return missing;
  }