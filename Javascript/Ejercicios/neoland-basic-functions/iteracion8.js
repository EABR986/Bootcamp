/*Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número 
de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:*/
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
 
  const repeatCounter= words => {
  let wordCount = {}  
  for (const word of words){ 
    wordCount[word] = wordCount[word] + 1 || 1;
  } console.log(wordCount)
} 


repeatCounter(counterWords)

