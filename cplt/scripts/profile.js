document
	.getElementById("profileForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		const profilePicture = document.getElementById("profilePicture").files[0];
		// Handle profile update logic here
		alert("Profile updated successfully.");
	});

// Communication preferences setting
function setCommunicationPreferences() {
	const preferences = prompt("Enter your communication preferences:");
	if (preferences) {
		alert("Communication preferences set to: " + preferences);
	}
}
