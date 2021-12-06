/* function verificaPalindrome(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara'));
  console.log(verificaPalindrome('desenvolvimento')); */


/*  function indiceDoMaior (numeros){
    let indiceMaior = 0
     for (let index in numeros){
         if (numeros[indiceMaior] < numeros[index]){
             indiceMaior = index;
         }
        
    } console.log(indiceMaior)
 }
 return indiceDoMaior([2, 3, 6, 7, 10, 1]) */

 function indiceDoMenor (numeros){
     let indiceMenor = 0
     for (let index in numeros){
         if (numeros[indiceMenor] > numeros[index]){
             indiceMenor = index;
         }
     }
    return indiceMenor;
 }
 
 console.log (indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))