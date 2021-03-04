//Counting Duplicates
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
function duplicateCount(text){
    let countArr = [],
        read = [],
        counter,
        most,
        duplicates = 0;
    
    if (text === "")
      return 0;
    
    text = text.toLowerCase();
    
    for(i = 0; i < text.length; i++) {
      counter = 0;
      if (read.includes(text[i]))
        i++;
      else {
  
        for(j = 0; j < text.length; j++)
          if (text[j] == text[i])
            counter++;
      
        read.push(text[i]);
        countArr.push(counter);
      }
    }
    
    
    most = Math.max(...countArr);
    
    if (most === 1)
      return 0;
    
    for(i = 0; i < countArr.length; i++) {
      if (countArr[i] < most && countArr[i] > 1)
        most = countArr[i];
      if (countArr[i] >= 2)
        duplicates++;
    }
    
    return duplicates;
  }