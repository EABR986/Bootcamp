
/*
**Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:*/

const numbers = [7, 2, 3, 5, 45, 37, 58];
let sumTotal=0
function sumNumbers(param) {
  for (let index = 0; index < param.length; index++) {
    sumNum= param[index] 
    sumTotal= sumTotal+sumNum
    ;
 

  }console.log(sumTotal)
}
sumNumbers(numbers)

 
