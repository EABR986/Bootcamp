// Iteración #6: Función swap
const exampleArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const swap = (array, a, b) => {
    const element = array[a]
    array[a] = array[b]
    array[b] = element
    return array
    
}

console.log(swap(exampleArray, 0, 3))