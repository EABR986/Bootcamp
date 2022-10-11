import { MovieCard } from "../../components/MoviesCards/MoviesCards";
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getMovies = async () => {
  const Movies = await getData("movies");
  
  printMovies(Movies);
};

const printMovies = (list) => {
  const section = document.createElement("section");
  section.classList.add("movie-section");
  for (const item of list) {
    section.innerHTML += MovieCard(item);
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const Movies = () => {
  getMovies();
};
