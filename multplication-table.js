//Multiplication Table
//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08E
multiplicationTable = function(size) {
    let table = [];
    for(i = 0; i < size; i++){
      let column = [];
      for(j = 0; j < size; j++)
        column.push((i+1) * (j+1))
      table.push(column);
    }
    return table;
  }