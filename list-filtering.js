//List-Filtering
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    let filtered_list = [];
    
    for(i = 0; i < l.length; i++) {
      if (l[i] === parseInt(l[i], 10))
        filtered_list.push(l[i]);
    }
    return  filtered_list;
    // Return a new array with the strings filtered out
  }