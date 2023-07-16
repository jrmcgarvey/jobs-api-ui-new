let loginDiv = null;
import { enabled, setDiv, token, message, enable, setToken } from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showJobs } from "./jobs.js";
let email = null;
let password = null;
export const handleLogin = () => {
  loginDiv = document.getElementById("logon-div");
  email = document.getElementById("email");
  password = document.getElementById("password");
  const logonButton = document.getElementById("logon-button");
  const logonCancel = document.getElementById("logon-cancel");
  loginDiv.addEventListener("click", async (e) => {
    if (enabled && e.target.nodeName === "BUTTON") {
      if (e.target === logonButton) {
        enable(false);
        try {
          const response = await fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.value,
              password: password.value,
            }),
          });
          const data = await response.json();
          if (response.status === 200) {
            message.textContent = `Logon successful.  Welcome ${data.user.name}`;
            setToken(data.token);
            localStorage.setItem("token", token);
            email.value = "";
            password.value = "";
            showJobs();
          } else {
            message.textContent = data.msg;
          }
        } catch (err) {
          message.textContent = "A communications error occurred.";
        }
        enable(true);
      } else if (e.target === logonCancel) {
        email.value = "";
        password.value = "";
        showLoginRegister();
      }
    }
  });
};

export const showLogin = () => {
  email.value = null;
  password.value = null;
  setDiv(loginDiv);
};
