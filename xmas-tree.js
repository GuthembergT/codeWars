//Xmas Tree
//https://www.codewars.com/kata/577c349edf78c178a1000108
function xMasTree(n){
    let tree = [];
    for(i = 0; i <= n+1; i++) {
      let row = '';
      for(j = 1; j <= n*2-1; j++) {
        if (i < n)
          row += (j < n - i || j > n + i) ? '_' : '#'
        if (i >= n)
          row += (j === n) ? '#' : '_';
      }
      tree.push(row);
    }
    return tree;
  }