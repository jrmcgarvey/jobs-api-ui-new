let activeDiv = null;
export let enabled = true;
export const enable = (state) => {
  enabled = state
}

export const setDiv = (div) => {
  if (div != activeDiv) {
    if (activeDiv) {
      activeDiv.style.display = "none";
    }
    div.style.display = "block";
    activeDiv=div
  }
};
export let token = null;
export const setToken = (value) => {
  token=value;
}
export let message = null;
import { showJobs, handleJobs } from "./jobs.js";
import { showLoginRegister, handleLoginRegister } from "./loginRegister.js";
import { handleLogin } from "./login.js";
import { handleAddEdit } from "./addEdit.js";
import { handleRegister } from "./register.js";
document.addEventListener("DOMContentLoaded", () => {
  token = localStorage.getItem("token");
  message = document.getElementById("message");
  handleLoginRegister();
  handleLogin();
  handleJobs();
  handleRegister();
  handleAddEdit();
  if (token) {
    showJobs();
  } else {
    showLoginRegister();
  }
});
