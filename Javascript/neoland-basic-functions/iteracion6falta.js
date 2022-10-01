/**Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar 
este array para probar tu función:*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  let notRepeated=[ ]
  const emoveDuplicate = (param) =>{
    for (let i = 0; i < param.length; i++) {
       for (let o = 0; o < param.length; o++) {
        if (param[i] == param[o]){
            notRepeated.push(param[i][o])
           }
           else{
            
           }
       }
       } console.log(notRepeated)
        
         /*if (param[i] != notRepeated ) {
         notRepeated+= param[i]   
        }*/
        
        
    } 
  
  emoveDuplicate(duplicates)