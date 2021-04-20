//String Matchup
//https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4
function solve(a,b){
    let count = [];
    b.forEach(word => count.push(0));
    b.forEach((word, i) => {
      for(j = 0; j < a.length; j++)
        if(word === a[j])
          count[i] += 1;
    });
    return count;
  }