const movieDisplay = document.getElementById("movie-display");
const movieSelect = document.getElementById("movie-select");
const searchBtn = document.getElementById("search-btn");

//API Connection
searchBtn.addEventListener("click", async () => {
	const query = movieSelect.value;
	if (!query) {
		return alert("No movie has been selected");
	}

	movieDisplay.innerHTML = "<p>Loading...</p>";
	try {
		const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=4af855c9`);
		if (!response.ok) {
			throw new Error("Could not get data");
		}
		//if you get to this point then the call is good.
		// Set the data into json and assign it to data.
		//log the data
		const data = await response.json();

		movieDisplay.innerHTML = data.Search.map(
			(movie) =>
				`<div style="display:flex; align-items:center; flex-direction:column;">
					<img src="${movie.Poster}" height="250" width="150" alt="Movie poster for ${movie.Title}" />
					<h2>${movie.Title}</h2>
					<p>${movie.Genre}</p>
					<p>${movie.imdbRating}</p>
				</div>
		`
		).join("");

		console.log(data.Search);
	} catch (error) {
		console.log(error);
	}
});
