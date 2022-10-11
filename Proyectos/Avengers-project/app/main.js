import "./style.css";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/movies";
// import { Characters } from "./pages/Characters/Characters";
// import { changeTheme } from "./components/Nav/Nav";
import { linkPage } from "./utils/linkPage";

const header = document.querySelector("header");
header.innerHTML = Nav();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const logolink=()=>{
    const logo=docuemnt.querySelector("#avengers-logo")
    console.log(logo)
    // logo.addEventListener("onclick", href="https://www.marvel.com/" )
}
// logolink()
Home();
linkPage("#homelink", Home)
linkPage("#movieslink", Movies);
// linkPage("#characterslink", Characters)

// changeTheme()