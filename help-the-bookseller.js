//Help the bookseller!
//https://www.codewars.com/kata/54dc6f5a224c26032800005c
function stockList(listOfArt, listOfCat){
    let result = '';
    
    if (listOfArt.length === 0)
      return result;
    
    listOfCat.forEach(category => {
      let numOfBooks = 0;
      listOfArt.forEach(book => {
        if(book[0] === category) {
          numberInString = '';
          for(num of book)
            numberInString += (num.charCodeAt() >= 48 && num.charCodeAt() <= 57) ? num : '';
          numOfBooks += Number(numberInString);
        }
      })
      result += `(${category} : ${numOfBooks}) - `;
    })
    return result.slice(0, result.length-3);
  }