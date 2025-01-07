document
	.getElementById("loginForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		// Handle login logic here
		if (username === "admin" && password === "password") {
			alert("Login successful!");
		} else {
			alert("Invalid username or password.");
		}
	});

// Password reset mechanism
function resetPassword() {
	const email = prompt("Enter your email for password reset:");
	if (email) {
		alert("Password reset link sent to " + email);
	}
}

// Multi-factor authentication (MFA)
function sendMfaCode() {
	const mfaCode = Math.floor(100000 + Math.random() * 900000);
	alert("Your MFA code is: " + mfaCode);
	const userCode = prompt("Enter the MFA code:");
	if (parseInt(userCode) === mfaCode) {
		alert("MFA successful!");
	} else {
		alert("Invalid MFA code.");
	}
}

// Account lockout after multiple failed attempts
let failedAttempts = 0;
document
	.getElementById("loginForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		if (username === "admin" && password === "password") {
			alert("Login successful!");
			failedAttempts = 0;
		} else {
			failedAttempts++;
			if (failedAttempts >= 3) {
				alert("Account locked due to multiple failed attempts.");
			} else {
				alert("Invalid username or password.");
			}
		}
	});
