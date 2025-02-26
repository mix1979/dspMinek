const elements = {
  enterBtn: document.getElementById("enterBtn"),
  startPage: document.getElementById("startPage"),
  clearBtn: document.getElementById("clearBtn"),
  loginField: document.getElementById("loginField"),
  passwordField: document.getElementById("passwordField"),
};

let auth = {
  login: "",
  password: "",
};

elements.loginField.addEventListener(
  "input",
  (e) => (auth.login = e.target.value)
);
elements.passwordField.addEventListener(
  "input",
  (e) => (auth.password = e.target.value)
);

function enterJournal() {
  if (auth.login === "mix1979" && auth.password === "Miha8011979") {
    window.location.href = "pages/mainPage.html";
  } else {
    window.location.href = "./";
    alert("Неправильный логин или пароль");
  }
}

function clearFields() {
  elements.loginField.value = "";
  elements.passwordField.value = "";
}

const loginPrompt = () => {
  sessionStorage.setItem("auth", JSON.stringify(auth));
};


elements.enterBtn.addEventListener("mouseup", () => enterJournal(auth));
elements.clearBtn.addEventListener("click", () => clearFields());
elements.enterBtn.addEventListener("mousedown", () => loginPrompt(auth));

window.document.addEventListener("DOMContentLoaded", () => {
  elements.loginField.value = "";
  elements.passwordField.value = "";
  sessionStorage.removeItem("auth");
});
