export function getCOVIDInfo(country) {

	if (country === "United Kingdom" || country === "Britain" || country === "britain" || country === "united kingdom") {
		country = "UK";
	}
	if (country === "United States" || country === "United States of America" || country === "America" || country === "united states" || country === "america") {
		country = "USA";
	}
	if (country === "United Arab Emirates" || country === "united arab emirates") {
		country = "UAE";
	}
	if (country === "Central African Republic" || country === "central african republic") {
		country = "CAR";
	}
	

	const url = 'https://coronavirus-19-api.herokuapp.com/countries' + '/' + country + '/';
	console.log("Url: " + url);
	
	return fetch(url, {method: 'get'})
		.then(response => response.json());
}

