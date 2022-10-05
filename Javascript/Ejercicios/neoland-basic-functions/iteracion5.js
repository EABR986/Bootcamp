/**Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo 
sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let sumNum=0
function averageWord(param) {
 for (let index = 0; index < param.length; index++) {
  if(Character.IsDigit(param[index]))  {
    sumNum+=param[index]
  }else{
    
    
  }
  

  } console.log(sumNum)
    
 }

averageWord(mixedElements)