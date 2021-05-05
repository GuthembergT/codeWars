//Small Enough? - Beginner
//https://www.codewars.com/kata/57cc981a58da9e302a000214
function smallEnough(a, limit){
    let yes = true;
    a.forEach(e => { if (e > limit) yes = false; })
    return yes;
}