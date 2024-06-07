const form = document.querySelector(`.login-form`);

form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!(email.value.trim() === "") && !(password.value.trim() === "")) {
    const formData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert("All form fields must be filled in");
  }
}
