// Enable editing for the selected input field
function enableEdit(fieldId) {
  const inputField = document.getElementById(fieldId);
  inputField.readOnly = false;
  inputField.focus();
}

// Update profile data
function updateProfile() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple validation (add more as needed)
  if (name === "" || email === "" || password === "") {
    alert("All fields are required.");
    return;
  }

  // Reset fields to readonly after update
  document.getElementById("name").readOnly = true;
  document.getElementById("email").readOnly = true;
  document.getElementById("password").readOnly = true;

  alert("Profile updated successfully!");
}
