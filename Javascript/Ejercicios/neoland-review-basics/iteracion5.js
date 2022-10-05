// Iteración #5: Función rollDice
const rollDice = (faces) => {
    return parseInt(Math.random() * (faces + 1))
}

console.log(rollDice(6))