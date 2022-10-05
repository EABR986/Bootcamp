// <!-- 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

// 1.3 Usa querySelector para mostrar por consola todos los p

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe". -->

const queryShowme = document.querySelector(".showme");
const queryPillado = document.querySelector("#pillado");
const allParragraph = document.querySelectorAll("p");
const allPokemon = document.querySelectorAll(".pokemon");
const allDataFunction= document.querySelectorAll("[data-function]");


console.log (queryPillado);
console.log(queryShowme);
console.log(allParragraph);
console.log(allPokemon);
console.log(allDataFunction);
console.log(allDataFunction[2]);




//querySelectorAll -> Genera una lista con los elementos del DOM correspondientes y tambien acepta clases, ids y etiquetas.
