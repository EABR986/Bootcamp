import "./Nav.css";

// export const changeTheme = () => {
//   const themeBtn = document.querySelector("#themeBtn");
//   console.log(themeBtn);
//   themeBtn.addEventListener(
//     "click",
//     () => document.body.classList.toggle("light") & changeText()
//   );
// };

// const changeText = () => {
//   const themeBtn = document.querySelector("#themeBtn");
//   if (themeBtn.innerText === "Light") {
//     themeBtn.innerText = "Dark";
//   } else {
//     themeBtn.innerText = "Light";
//   }
// };

export const Nav = () => `
<nav>
    <a href="https://www.marvel.com/" alt="marvel home page">
        <img class= "avengers-mini" src="https://res.cloudinary.com/dvedrbvnw/image/upload/v1665489356/avengers/5842a4f5a6515b1e0ad75af6_p46j5y.png" ) />
    </a>
    <ul>
        <li>
            <a href="#" id="homelink">Home</a>
        </li>
        <li>
            <a href="#" id="movieslink">Movies</a>
        </li>
        <li>
            <a href="#" id="characterslink">Heros</a>
        </li>

    </ul>
    
</nav>

`;
