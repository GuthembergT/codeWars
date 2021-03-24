//Data Reverse
//https://www.codewars.com/kata/569d488d61b812a0f7000015
function dataReverse(data) {
    let reverse = [];
    for(i = data.length-8; i >= 0; i-=8)
        reverse = reverse.concat(data.splice(i, 8))
    return reverse;
  }