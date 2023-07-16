let jobsDiv = null;
import { enabled, setDiv, message } from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showAddEdit } from "./addEdit.js";

export const handleJobs = () => {
  jobsDiv = document.getElementById("jobs");
  const logoff = document.getElementById("logoff")
  const addJob = document.getElementById("add-job")
  jobsDiv.addEventListener("click", (e) => {
    if (enabled && e.target.nodeName === "BUTTON") {
      if (e.target === addJob) {
        showAddEdit();
      } else if (e.target === logoff) {
        showLoginRegister();
      }
    }
  });
};

export const showJobs = () => {
  setDiv(jobsDiv);
};
