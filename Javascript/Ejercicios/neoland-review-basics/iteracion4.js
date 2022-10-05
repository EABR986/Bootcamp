// Iteración #4: Métodos findArrayIndex

const example = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote','Salamandra']

const findArrayIndex = (array, text) => {
    let index = array.findIndex(s => s === text);
    if(index === -1) 
    return new Error(`The array does not have "${text}" text`)
    return index
}

console.log(findArrayIndex(example, 'Salamandra'))
console.log(findArrayIndex(example, 'pepe'))
console.log(findArrayIndex(example, 'Salamandra'))
