//Iteración #4: Arrays

/*1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers1[0]);



/*1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let newAvengers= avengers;
newAvengers[0]="IRONMAN";
console.log(newAvengers);



/*1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avengersElements= avengers2.length;
console.log(avengersElements)



/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];*/
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty" , "Summer");
let lastCharacter= rickAndMortyCharacters[rickAndMortyCharacters.length-1]
console.log(lastCharacter)





/*TODAVIA NO
1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop()
console.log(rickAndMortyCharacters1[0], rickAndMortyCharacters1[rickAndMortyCharacters1.length-1]);



/* TODAVIA NO
1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
 rickAndMortyCharacters2.splice(1,1);

console.log(rickAndMortyCharacters2)

