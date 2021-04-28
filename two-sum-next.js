//Two Sum
//https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target) {
    const result = [];
    numbers.forEach((num, index) => numbers.forEach((n, i) => { if (i !== index && (target === num + n) && result.length === 0) result.push(index, i)}))
    return result;
}