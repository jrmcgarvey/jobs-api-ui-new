let registerDiv = null;
import { enabled, setDiv } from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showJobs } from "./jobs.js";
let email1 = null
let password1 = null
let password2 = null
export const handleRegister = () => {
  registerDiv = document.getElementById("register-div");
  email1 = document.getElementById("email1");
  password1 = document.getElementById("password1")
  password2 = document.getElementById("password2");
  const registerButton = document.getElementById("register-button");
  const registerCancel = document.getElementById("register-cancel");
  registerDiv.addEventListener("click", (e) => {
    if (enabled && e.target.nodeName === "BUTTON") {
      if (e.target === registerButton) {
        showJobs();
      } else if (e.target === registerCancel) {
        showLoginRegister();
      }
    }
  });
};

export const showRegister = () => {
  email1.value = null
  password1.value = null
  password2.value = null
  setDiv(registerDiv);
}