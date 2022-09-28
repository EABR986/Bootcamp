/**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
const numbers = [12, 21, 38, 5, 45, 37, 6];
let addNum = 0
function average(param) {
 for (let index = 0; index < param.length; index++) {
    addNum =addNum + param[index];
 } 
 let numAverage= addNum/param.length
 console.log(numAverage);
}

average(numbers)