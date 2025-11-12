function validateEmail(email) {
  // A solid regex for modern email formats
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Example of how to use it in real-time
const emailInput = document.getElementById('userEmail');

emailInput.addEventListener('input', () => {
  const isValid = validateEmail(emailInput.value);
  if (isValid) {
    console.log('Email format looks good!');
    // Here you would add a class for success styling, like a green border
  } else {
    console.log('Please enter a valid email.');
    // And here you'd add an error class for a red border and message
  }
});