let jobsDiv = null;
import { enabled, setDiv, message, setToken } from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showAddEdit } from "./addEdit.js";

export const handleJobs = () => {
  jobsDiv = document.getElementById("jobs");
  const logoff = document.getElementById("logoff");
  const addJob = document.getElementById("add-job");
  jobsDiv.addEventListener("click", (e) => {
    if (enabled && e.target.nodeName === "BUTTON") {
      if (e.target === addJob) {
        message.textContent = "";
        showAddEdit();
      } else if (e.target === logoff) {
        setToken(null);
        localStorage.removeItem("token");
        message.textContent  = "You have been logged off.";
        showLoginRegister();
      }
    }
  });
};

export const showJobs = () => {
  setDiv(jobsDiv);
};
