const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const passwordGroup = document.getElementById("password-group");
const formButton = document.getElementById("form-button");

const form = document.querySelector(".login-form");

usernameInput.addEventListener("change", () => {
  passwordGroup.classList.remove("hide");
  passwordInput.focus();
});

passwordInput.addEventListener("change", () => {
  formButton.classList.remove("hide");
  formButton.focus();
});

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.id !== "form-button") {
    e.preventDefault();
    if (e.target.name === "username") {
      usernameInput.dispatchEvent(new Event('change'));
    } else if (e.target.name === "password") {
      passwordInput.dispatchEvent(new Event('change'));
    }
  }
});
