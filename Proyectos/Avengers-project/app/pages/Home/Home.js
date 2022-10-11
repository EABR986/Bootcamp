import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <section class="home">
    <img class= "avengers-logo" src="https://res.cloudinary.com/dvedrbvnw/image/upload/v1665485034/avengers/Avengers-Logo-PNG-High-Quality-Image_wpkmvk.png" alt="avengers logo" />
    <div class="parr-container">
      <p clss="main-parragraph">
        Welcome my freaky fellow, if you are here it's because you wanna know more 
        about MARVEL THE AVENGERS franchise, here you will find a list of the movies that became part of this 
        incredible and epic universe and also you could see a list of some of the heroes that form part of ir. HOPE YOU ENJOY IT.
      </p>
    </div>
    <div class="gif-container">
      <img class = "gif" src="https://res.cloudinary.com/dvedrbvnw/image/upload/v1665491509/avengers/P9JD_quno8h.gif" alt="Advengers gif"/>
    
    </div>
    </section>`;
};
