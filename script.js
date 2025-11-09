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
			(movie, i) =>
				`<div class="movie-styles ${i >= 5 ? "hidden" : ""}">
					<img src="${movie.Poster}" height="250" width="200" alt="Movie poster for ${movie.Title}" />
					<h3 class="movie-title">${movie.Title}</h3>
					<p>${movie.Year}</p>
				</div>
		`
		).join("");

		console.log(data.Search);
	} catch (error) {
		console.log(error);
	}
});

function showingMovies() {
	const hiddenMovies = document.querySelectorAll("hidden");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove("hidden");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			root: null,
			threshold: 0.1,
		}
	);
	hiddenMovies.forEach((movie) => observer.observe(movie));
}
