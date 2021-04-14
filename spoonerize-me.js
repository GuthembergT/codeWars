//Spoonerize Me
//https://www.codewars.com/kata/56b8903933dbe5831e000c76
function spoonerize(words) {
    var spoonerized;
    var splt = words.split(' ');
    spoonerized = splt[1].slice(0,1) + splt[0].slice(1) + " " + splt[0].slice(0, 1) + splt[1].slice(1);
    return spoonerized;
  }