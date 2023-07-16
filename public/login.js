let loginDiv = null;
import { enabled, setDiv } from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showJobs } from "./jobs.js";
let email = null;
let password = null;
export const handleLogin = () => {
  loginDiv = document.getElementById("logon-div")
  email = document.getElementById("email");
  password = document.getElementById("password");
  const logonButton = document.getElementById("logon-button");
  const logonCancel = document.getElementById("logon-cancel");
  loginDiv.addEventListener("click", (e) => {
    if (enabled && e.target.nodeName === "BUTTON") {
      if (e.target === logonButton) {
        showJobs();
      } else if (e.target === logonCancel) {
        showLoginRegister();
      }
    }
  });
};

export const showLogin = () => {
  email.value=null
  password.value=null
  setDiv(loginDiv);
};
