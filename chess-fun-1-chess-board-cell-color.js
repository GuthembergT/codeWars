//Chess Fun #1: Chess Board Cell Color
//https://www.codewars.com/kata/5894134c8afa3618c9000146
function chessBoardCellColor(cell1, cell2) {
    const color = function(cell) { 
      switch(cell[0]) {
          case 'A': case 'C': case 'E': case 'G': return (Number(cell[1]) % 2 > 0) ? 'col1' : 'col2';
          case 'B': case 'D': case 'F': case 'H': return (Number(cell[1]) % 2 === 0) ? 'col1' : 'col2';
      }
    }
    return color(cell1) === color(cell2);
}