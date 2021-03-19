//Total Pressure Calculation
//https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a

solution= (mole1, mole2, mass1, mass2, volume, temp, r=0.082) => {
    return ((mass1 / mole1) + (mass2 / mole2)) * (r * (temp+273.15)) / volume;
  }