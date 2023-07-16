let jobsDiv = null;
import { enabled, setDiv, message, setToken, token } from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showAddEdit } from "./addEdit.js";
let jobsTable = null;
let jobsTableHeader = null;

export const handleJobs = () => {
  jobsDiv = document.getElementById("jobs");
  const logoff = document.getElementById("logoff");
  const addJob = document.getElementById("add-job");
  jobsTable = document.getElementById("jobs-table");
  jobsTableHeader = document.getElementById("jobs-table-header");
  jobsDiv.addEventListener("click", (e) => {
    if (enabled && e.target.nodeName === "BUTTON") {
      if (e.target === addJob) {
        message.textContent = "";
        showAddEdit();
      } else if (e.target === logoff) {
        setToken(null);
        localStorage.removeItem("token");
        message.textContent = "You have been logged off.";
        jobsTable.replaceChildren([jobsTableHeader]);
        lo;
        showLoginRegister();
      }
    }
  });
};

export const showJobs = async () => {
  try {
    const response = await fetch("/api/v1/jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    let children = [jobsTableHeader];
    if (response.status === 200) {
      if (data.count === 0) {
        jobsTable.replaceChildren(...children); // clear this for safety
      } else {
        for (let i = 0; i < data.jobs.length; i++) {
          let editButton = `<td><button type="button" class="editButton" data-id=${data.jobs[i]._id}>edit</button></td>`;
          let deleteButton = `<td><button type="button" class="deleteButton" data-id=${data.jobs[i]._id}>delete</button></td>`;
          let rowHTML = `<td>${data.jobs[i].company}</td><td>${data.jobs[i].position}</td><td>${data.jobs[i].status}</td>${editButton}${deleteButton}`;
          let rowEntry = document.createElement("tr");
          rowEntry.innerHTML = rowHTML;
          children.push(rowEntry);
        }
        jobsTable.replaceChildren(...children);
      }
    } else {
      message.textContent = data.msg;
    }
  } catch (err) {
    console.log(err);
    message.textContent = "A communication error occurred.";
  }
  setDiv(jobsDiv);
};
