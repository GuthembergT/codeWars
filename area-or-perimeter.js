//Area or Perimeter
//https://www.codewars.com/kata/51f9d93b4095e0a7200001b8
const areaOrPerimeter = function(l , w) {
    return (l === w) ? Math.pow(l, 2) : ((l*2) + (w*2))
  };