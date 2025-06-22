document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const contact = document.getElementById("contact").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const user = { name, contact, password };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Account created successfully");
      window.location.href = "login.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("No account found. Please sign up.");
        window.location.href = "register.html"; 
      }

      const loginValid =
        storedUser.contact === username && storedUser.password === password;

      if (loginValid) {
        alert("Login successful");
        window.location.href = "index.html"; // Redirect to home page
      } else {
        alert("Invalid credentials");
         window.location.href = "register.html"; 
      }
    });
  }
});
