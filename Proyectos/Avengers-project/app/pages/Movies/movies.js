import { filter, MovieCard } from "../../components/MoviesCards/MoviesCards";
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getMovies = async () => {
  const Movies = await getData("movies");
  
  printMovies(Movies);
}

  
const printMovies = (list) => {
  
  const selectElement = document.querySelector('#phaseSelect');
 
  const app = document.querySelector("#app");

  cleanPage(app);

  for (const item of list) {
          app.innerHTML += MovieCard(item);
       }

 selectElement.addEventListener('change', (event) =>{
    cleanPage(app); 
     
  for (const item of list) {
 
    const selectValue = event.target.value;
    console.log (item.phase);
 
  if (item.phase === selectValue ) {
   
    app.innerHTML += MovieCard(item);
     ;}
     else if (item.director === selectValue ) {
   
      app.innerHTML += MovieCard(item);
     }}})};

export const Movies = () => {
  getMovies();
filterOfMovies()

}

const filterOfMovies=()=>{
  const section=document.createElement("section")
  section.classList.add("select-movies")
  section.innerHTML=filter;
  const select= document.querySelector("#select")
  cleanPage(select)
  select.appendChild(section)
  }


