function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("mobileError").innerText = "";
  document.getElementById("genderError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Name validation
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  // Mobile number validation
  let mobile = document.getElementById("mobile").value.trim();
  if (mobile.length !== 10 || isNaN(mobile)) {
    document.getElementById("mobileError").innerText =
      "Enter a valid 10-digit mobile number (numbers only)";
    isValid = false;
  }

  // Gender validation
  let gender = document.getElementById("gender").value;
  if (gender === "") {
    document.getElementById("genderError").innerText =
      "Please select your gender";
    isValid = false;
  }

  // Password validation
  let password = document.getElementById("password").value;
  if (password.length < 8) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 8 characters";
    isValid = false;
  }

  return isValid; // prevent form submission if false
}
function checkmobile() {
  //Get the value from mobile input
  let mobile = document.getElementById("mobile").value;
  let errorDiv = document.getElementById("mobileError");

  //checking character
  for (let i = 0; i < mobile.length; i++) {
    let char = mobile[i];
    if (char < "0" || char > "9") {
      errorDiv.innerText = "Only numbers allowed";
      return;
    }
  }

  //checking mobile number length
  if (mobile.length > 10) {
    errorDiv.innerText = "Mobile number cannot exceed 10 digits";
    return;
  }

  //if everything is fine, clear the error
  errorDiv.innerText = "";
}
// At the bottom of script.js
if (typeof module !== "undefined") {
  module.exports = { validateForm, checkmobile };
}