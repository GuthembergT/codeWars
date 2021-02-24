//Growth of a Population
//https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
    let newPopulationSize = p0,
        years = 0;
    percent /= 100;
    if (percent === 0){
      years = (p - p0) / aug;
      return years;
    }
    
    while(newPopulationSize <= p) {
      let populationIncrease = newPopulationSize * percent;
      if (years === 49)
        console.log(newPopulationSize);
      ++years;
      newPopulationSize += populationIncrease + aug;
      if (years === 50)
        console.log(newPopulationSize);
    }
    
    return years;
  }