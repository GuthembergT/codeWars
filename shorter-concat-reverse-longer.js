//Shorter Concat[Reverse Longer]
//https://www.codewars.com/kata/54557d61126a00423b000a45
function shorter_reverse_longer(a,b){
    return (b.length <= a.length) ? b+a.split('').reverse().join('')+b : a+b.split('').reverse().join('')+a;
}