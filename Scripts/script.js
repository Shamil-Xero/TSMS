document
  .getElementById("login-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are correct
    // In a real application, this would involve server-side validation
    if (username === "admin" && password === "123") {
        // If correct, navigate to home.html
        window.location.href = "home.html";
    } else {
        // If incorrect, display an error message
        document.getElementById("error-message").textContent =
        "Invalid username or password";
        }
  });
