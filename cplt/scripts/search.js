document
	.getElementById("searchForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const from = document.getElementById("from").value;
		const to = document.getElementById("to").value;
		const departureDate = document.getElementById("departureDate").value;
		const returnDate = document.getElementById("returnDate").value;
		// Handle flight search logic here
		alert("Searching flights from " + from + " to " + to);
	});

// Flexible date search
function flexibleDateSearch() {
	const flexibleDates = prompt("Enter flexible dates (e.g., +3 days):");
	if (flexibleDates) {
		alert("Searching flights with flexible dates: " + flexibleDates);
	}
}

// Multi-city trip planning
function multiCityTrip() {
	const cities = prompt("Enter multiple cities (e.g., NYC, LAX, SFO):");
	if (cities) {
		alert("Planning multi-city trip: " + cities);
	}
}

// Filter options
function filterOptions() {
	const filters = prompt(
		"Enter filter options (e.g., price, duration, stops):"
	);
	if (filters) {
		alert("Applying filters: " + filters);
	}
}

// Compare flight alternatives
function compareFlights() {
	const alternatives = prompt("Enter flight alternatives to compare:");
	if (alternatives) {
		alert("Comparing flight alternatives: " + alternatives);
	}
}
