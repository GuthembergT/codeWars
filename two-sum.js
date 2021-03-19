//Two Sum
//https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target) {
    for(i = 0; i < numbers.length; i++) {
      for(j = 1; j < numbers.length; j++)
        if(numbers[i] + numbers[j] === target)
          return [i, j];
    }
  }