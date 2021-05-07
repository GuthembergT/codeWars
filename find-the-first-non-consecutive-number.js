//Find the First Non-Consecutive Number
//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
function firstNonConsecutive (arr) {
    if (arr.length <= 1)
      return null;
    let found = null;
    arr.forEach((el, i) => { if (i >= 1) if(el - arr[i-1] > 1 && found === null) found = el})
    return found;
}