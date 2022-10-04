// Iteración #1: Mix for e includes**

// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con 
// las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las 
// categorías no deberían repetirse.  Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'pepe']},
]
let moviesCategories= [ ]
for (const keys of movies) {
    if (keys.categories.includes (`comedia`) && !moviesCategories.includes(`comedia`)){   
       moviesCategories.push(`comedia`);}
        else if(keys.categories.includes (`aventura`) && !moviesCategories.includes(`aventura`)){
        moviesCategories.push(`aventura`);}
        else if(keys.categories.includes (`acción`) && !moviesCategories.includes(`acción`)){  
        moviesCategories.push(`accion`);}
        else if(keys.categories.includes (`thriller`) && !moviesCategories.includes(`thriller`)){
        moviesCategories.push(`thriller`);}
        else if(keys.categories.includes (`animacón`) && !moviesCategories.includes(`animacion`)){
        moviesCategories.push(`animación`);}
        
    
    }console.log(moviesCategories)
    // }else if(keys.categories.includes (`acción`)){
    //    moviesAccion.push(`accion`);}
    //   else if(keys.categories.includes (`aventura`)){
    //       moviesAventura.push(keys)}
      