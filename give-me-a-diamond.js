//Give Me A Diamond
//https://www.codewars.com/kata/5503013e34137eeeaa001648
function diamond(n){
    if (n <= 0 || n % 2 === 0)
      return null;
    
    let diam = '',
        spaces = (n - 1) / 2;
    
      for(i = 0; i <= n; i+=2){
        for(j = spaces; j > 0; j--){
          diam += ' ';
        }
        spaces--;
        for(k = 0; k <= i; k++)
          diam += '*';
        diam += '\n';
      }
    
    spaces = 1;
    
    if ( n > 1)
      for(i = n-2; i > 0; i-=2){
        for(j = spaces; j > 0; j--){
          diam += ' ';
        }
        spaces++;
        for(k = 0; k < i; k++)
          diam += '*';
        diam += '\n';
      }
    return diam;
  }