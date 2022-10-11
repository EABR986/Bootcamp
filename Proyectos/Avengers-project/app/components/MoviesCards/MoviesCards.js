import "./MoviesCards.css";

export const MovieCard = (item) => ` 
<figure class="card" style="background: url(${item.poster}) no-repeat center center;
background-size: cover"> 
    <div class="description">
    <h2>${item.title}</h2>
    <p>${item.description} - ${item.date}</p>
    </div>
</figure>
`;
