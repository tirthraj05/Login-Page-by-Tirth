document.addEventListener("DOMContentLoaded", function() {
  const signinForm = document.getElementById("signin-form");
  signinForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the form fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign in user with email and password using Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user);
        alert("Sign in successful!");
        // You can redirect to a different page here if needed
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
});