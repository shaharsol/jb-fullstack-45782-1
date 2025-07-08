function validate(event) {
  event.preventDefault();
  console.log("validating...");
  const password = document.getElementById("password").value;
  const hasCapitalLetters = password.toLowerCase() !== password;
  if (!hasCapitalLetters) {
    document.getElementById("password-error").innerText =
      "password must have capital letter";
  }

  const email = document.getElementById("email").value;
  const isJohnBryceEmail = email.includes("johnbryce");
  if (!isJohnBryceEmail) {
    document.getElementById("email-error").innerText =
      "please enter a john bryce email address";
  }

  return hasCapitalLetters && isJohnBryceEmail;
}
