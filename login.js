 <script>
        document.addEventListener("DOMContentLoaded", function() {
            const loginForm = document.getElementById("login-form");
            loginForm.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent the default form submission

                // Get the username and password from the form
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

                // Check if the username and password are correct (static credentials for demo)
                if ((username === "Tirth" && password === "Tirth") ||
                    (username === "Raj" && password === "Raj") ||
                    (username === "Username" && password === "Password") ||
                    (username === "Username:" && password === "Password:") ||
                    (username === "Gajera" && password === "Gajera")) {
                    alert("Login successful!");
                    // Redirect to a different page or perform other actions for successful login
                    window.location.href = "my profile.html";
                } else {
                    alert("Invalid username or password. Please try again.");
                }
            });
        });
    </script>
