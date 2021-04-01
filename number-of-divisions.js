//Number of Divisions
//https://www.codewars.com/kata/5913152be0b295cf99000001
const divisions = (n, divisor) => {
    let total = 0;
    if (n === divisor)
        return 1;
    while(n > 1) {
      n /= divisor;
      total++;
    }
    return total-1;
  };