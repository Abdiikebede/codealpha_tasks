function getDOB() {
  // Get input values
  const dobInput = document.getElementById("inputDob").value;
  const currentDateInput = document.getElementById("cdate").value;

  // Get elements for displaying messages
  let dobError = document.getElementById("dobError"); // Error below DOB input
  let cdateError = document.getElementById("cdateError"); // Error below Current Date input
  let currentAgeDisplay = document.getElementById("currentAge"); // Age display section

  // Clear previous messages
  dobError.textContent = "";
  cdateError.textContent = "";
  currentAgeDisplay.textContent = "";

  // Validate input
  if (!dobInput && !currentDateInput) {
    dobError.textContent = "Please enter your Date of Birth.";
    cdateError.textContent = "Please enter the Current Date.";
    return;
  } else if (!dobInput) {
    dobError.textContent = "Please enter your Date of Birth.";
    return;
  } else if (!currentDateInput) {
    cdateError.textContent = "Please enter the Current Date.";
    return;
  }

  // Convert input values to Date objects
  const dob = new Date(dobInput);
  const currentDate = new Date(currentDateInput);

  // Check for valid dates
  if (isNaN(dob.getTime())) {
    dobError.textContent = "Invalid Date of Birth. Please enter a valid date.";
    return;
  }
  if (isNaN(currentDate.getTime())) {
    cdateError.textContent = "Invalid Current Date. Please enter a valid date.";
    return;
  }

  // Ensure DOB is not in the future
  if (dob > currentDate) {
    dobError.textContent = "Date of Birth cannot be in the future.";
    return;
  }

  // Calculate age
  let age = currentDate.getFullYear() - dob.getFullYear();
  const monthDifference = currentDate.getMonth() - dob.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

  // Display the result

  if (age < 1) {
    currentAgeDisplay.textContent = " You are an infant (under 1 year)";
  } else {
    currentAgeDisplay.textContent = `Your age is ${age} years.`;
  }
}
