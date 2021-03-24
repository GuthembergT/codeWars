//Reverse Words
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
function reverseWords(str) {
    let reverse = '', split = str.split(" ");
    console.log(split.indexOf(split[0]));
    console.log(split.indexOf(split[split.length-1]));
    split.forEach((word, index) => reverse += word.split("").reverse().join("") + ((word === split[split.length-1] && split.length-1 === index ? "" : " ")))
    return reverse;
  }