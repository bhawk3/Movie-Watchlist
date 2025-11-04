const movieDisplay = document.getElementById("movie-display");

//API Connection
async function getData() {
	try {
		const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=4af855c9");
		if (!response.ok) {
			throw new Error("Could not get data");
		}
		//if you get to this point then the call is good.
		// Set the data into json and assign it to data.
		//log the data
		const data = await response.json();

		const moviePoster = data.Poster;
		const movieTitle = data.Title;
		const movieGenre = data.Genre;
		const rating = data.imdbRating;

		function displayData() {
			movieDisplay.innerHTML += `
                <div style="display:flex; justify-content:center; flex-direction:column;">
                    <img src="${moviePoster}" height="250" width="150" alt="Movie poster for ${movieTitle}" />
                    <h2>${movieTitle}</h2>
                    <p>${movieGenre}</p>
                    <p>${rating}</p>
                </div>
            `;
		}
		displayData();
		console.log(movieTitle);
	} catch (error) {
		console.log(error);
	}
}

getData();
