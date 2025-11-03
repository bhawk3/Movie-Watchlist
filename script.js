const movieDisplay = document.getElementById("movie-display");

//API Connection
fetch("https://www.omdbapi.com/?i=tt3896198&apikey=4af855c9")
	.then((response) => {
		if (!response.ok) {
			throw new Error("There was an error!");
		}
		return response.json(); // Parse the JSON data from the response
	})
	.then((data) => {
		console.log("Data received:", data);
		// Process the data here (e.g., update the DOM)
	})
	.catch((error) => {
		console.error("There was a problem with the fetch operation:", error);
	});
