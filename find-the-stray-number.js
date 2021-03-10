//Find the Stray Number
//https://www.codewars.com/kata/57f609022f4d534f05000024
function stray(numbers) {
    let max = Math.max(...numbers),
        maxCount = 0,
        min = Math.min(...numbers),
        minCount = 0;
    
    numbers.forEach(num => {
      num === max ? maxCount++ : minCount++;
    });
    
    if (maxCount > minCount)
        return min
    else
        return max;
  }