// //2.1 Inserta dinamicamente en un html un div vacio con javascript.

//// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

//// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

//// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

// // 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// // 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// // const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
//////////////////////////////////////////////////////////
const newDiv2= document.createElement("div");
const newParr= document.createElement("p");
newDiv2.appendChild(newParr);
document.body.appendChild(newDiv2);
//////////////////////////////////////////////////////////////////
 const newdiv3= document.createElement("div");
for (let i = 0; i < 6; i++){
   const newParr3= document.createElement("p");
   newdiv3.appendChild(newParr3)
   document.body.appendChild(newdiv3)
}



///////////////////////////////////////////////////7
const newParr2= document.createElement("p");
const textPar= document.createTextNode("Soy dinámico!");
newParr2.appendChild(textPar)
document.body.appendChild(newParr2)

//////////////////////////////////////////////////////////////////
const newH2 = document.querySelector(".fn-insert-here");
const textH2 = document.createTextNode('wubba Lubba dub dub');
console.log(newH2)
newH2.appendChild(textH2);
///////////////////////////////////////////////////////////////////////////7
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const appList = document.createElement("ul");

for (const app of apps) {
    const li = document.createElement('li')
    const appText= document.createTextNode(app);
    const liAppend= li.appendChild(appText);
appList.appendChild(li);
document.body.appendChild(appList);
}
//////////////////////////////////////////////////////////7
// const deleteWord= document.querySelectorAll(".fn-remove-me");
// console.log(deleteWord)
// deleteWord.remove();
//////////////////////////////////////////////////////////
const allQueryDivs = document.querySelectorAll("div");
const changeDivs = document.querySelectorAll('.fn-insert-here')
console.log(allQueryDivs)
console.log(changeDivs)
console.log(allQueryDivs.classList.contains("fn-insert-here"))
// for (const queryDiv in allQueryDivs){
//      if (queryDiv.classList.contains("fn-insert-here"))
    
// }