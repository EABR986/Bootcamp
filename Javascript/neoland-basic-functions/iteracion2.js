//**Iteración #2: Buscar la palabra más larga**

/*Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
]; let lengthWord = " ";
function findLongestWord(param) {
 
  for (let index = 0; index < param.length; index++) {
    if (param[index].length > lengthWord.length) {
      lengthWord = param[index];
      
    } else{
     
    }
  } console.log(lengthWord) //debe estar fuera de la funcion para su llamada no afecte nada   
}
findLongestWord(avengers);

