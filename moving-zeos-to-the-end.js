//Moving Zeroes to the End
//https://www.codewars.com/kata/52597aa56021e91c93000cb0
var moveZeros = function (arr) {
    if (arr.includes(0)){
      let ordered = arr.reduce( (acc, el) => { return (el === 0 ?  [...acc, 0] : acc) }, [])
      arr.reverse().forEach(el => { if(el !== 0) ordered.push(el)})
      return ordered.reverse();
    }
  }