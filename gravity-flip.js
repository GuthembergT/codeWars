//Gravity Flip
//https://www.codewars.com/kata/5f70c883e10f9e0001c89673
const flip=(d, a)=>{
    return a.sort((a, b) => { return (d === 'R') ? a - b : b - a })
}