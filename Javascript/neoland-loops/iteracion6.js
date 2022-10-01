/**Iteración #6: Mixed For...of e includes**

Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que 
puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:*/

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
let newToys=[ ]    
for (const keys of toys) {
  if (keys.name.includes (`gato`)){

  }else{
    newToys.push(keys)
    
  }
}console.log(newToys);
 

  
    //console.log(Object.values(keys))}
    /*let toysValues=(Object.values(keys))
    if(toysValues.inludes("gato")){

    }else{
            newToys+=keys}}*/