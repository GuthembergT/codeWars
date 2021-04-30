//#8: Treasure Map
//https://www.codewars.com/kata/57d63b45ec1670518c000259
function findX(m){
    const cardinal = function(str) { return str[0] };
    const steps = function(str) { return Number(str.slice(1)) };
    const direction = function(str) { return (cardinal(str) === 'S' || cardinal(str) === 'E') ? steps(str) : -steps(str)}
    const middleRow = m[Math.ceil(m.length/2)-1];
    let current = middleRow[Math.ceil(middleRow.length/2)-1];
    let row = Math.ceil(m.length/2)-1;
    let column = Math.ceil(middleRow.length/2)-1;
    const coordinates = [current];
    
    console.log(current);
    while(coordinates[coordinates.length-1] !== 'X') {
      cardinal(current) === 'W' || cardinal(current) === 'E' ? column += direction(current) : row += direction(current);
      console.log(column, row)
      if (row < 0 || row > m.length-1 || column < 0 || column > m[row].length-1 || coordinates.length > m.length*20)
        return null;
      coordinates.push(m[row][column]);
      current = m[row][column];
      console.log(current);
    }
    return [row, column];
  }