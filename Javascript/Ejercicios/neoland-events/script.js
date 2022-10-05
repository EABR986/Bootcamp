// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const clickButton= document.querySelector('#btnToClick')
clickButton.addEventListener("click", (ev) =>console.log(ev))

const focusEvent= document.querySelector(`.focus`)
focusEvent.addEventListener("focus", (event) => console.log(event));

const inputEvent= document.querySelector(`.value`)
inputEvent.addEventListener("input", (event) => console.log(event));