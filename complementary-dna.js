//Complementary DNA
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038
function DNAStrand(dna){
    let complement = '';
    for(i = 0; i < dna.length; i++)
      {
        switch(dna[i]) {
            case 'A': complement += 'T';
            break;
            case 'C': complement += 'G';
            break;
            case 'G': complement += 'C';
            break;
            case 'T': complement += 'A';
            break;
        }
      }
    return complement;
  }