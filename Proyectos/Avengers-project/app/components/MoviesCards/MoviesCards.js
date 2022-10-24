import "./Moviescards.css";

export const filter = 
    `
    
        <label for="phaseSelect" class="label"> You can filter by: </label></label>
        <select name="movie-Select" id="phaseSelect" >
            <option value="">-- Search by Phase --</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
            <option value="">-- Search by director --</option>
            <option value="Joss Whedon">Joss Whedon</option>
            <option value="Anthony and Joe Russo">Anthony and Joe Russo</option>
            </select>
        
  `

export const MovieCard = (item) => ` 

	<div class="contenedor">
        <img class="img-container" src = ${item.poster} alt="avengers poster" />
        <div class="text-container">
			<p class="img-container__title">
            ${item.title}
			</p>
			<p class="img-container__excerpt">
            ${item.description} - ${item.date}
			</p>
		</div>
		
	</div>
`;



    