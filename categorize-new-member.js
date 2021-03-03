//Categorize New Member
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
function openOrSenior(data){
    let result = [];
    data.forEach(arr => {
      (arr[0] >= 55 && arr[1] > 7) ? result.push('Senior') : result.push('Open');
    })
    return result;
  }