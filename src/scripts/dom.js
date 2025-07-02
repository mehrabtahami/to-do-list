// Main Module
export default (() => {
  // Add New Task Button (+)
  (() => {
    document.querySelector(".newtask-btn").addEventListener("click", () => {
      showNewTaskModal();
    });
  })();
  // New Task Modal Form - Cancel Btn to Close Modal
  document
    .querySelector("#newtask-modal .cancel-btn")
    .addEventListener("click", () => {
      hideNewTaskModal();
    });
  // Changing Task Status By Clicking on Dom
  changeDomTaskStatusCheckbox();
})();

// Funcions **********
function showNewTaskModal() {
  document.getElementById("newtask-modal").style.opacity = "1";
  document.getElementById("newtask-modal").style.zIndex = "10";
}

export function hideNewTaskModal() {
  document.getElementById("newtask-modal").style.opacity = "0";
  document.getElementById("newtask-modal").style.zIndex = "-10";
}

function changeDomTaskStatusCheckbox() {
  const taskContainer = document.querySelector(".tasks-container");
  taskContainer.addEventListener("click", (e) => {
    const clicked = e.target.closest(".task-status");
    if (!clicked.classList.contains("done")) {
      clicked.classList.add("done");
    } else {
      clicked.classList.remove("done");
    }
  });
}

export function showNewTaskOnDom(title, desc) {
  const container = document.querySelector(".tasks-container");
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");
  container.appendChild(taskCard);
  const taskTitle = document.createElement("h3");
  taskTitle.classList.add("task-title");
  taskCard.appendChild(taskTitle);
  const taskDesc = document.createElement("p");
  taskDesc.classList.add("task-summary");
  taskCard.appendChild(taskDesc);
  const taskStatus = document.createElement("span");
  taskStatus.classList.add("task-status");
  taskStatus.innerHTML = '<i class="bi bi-check2"></i>';
  taskCard.appendChild(taskStatus);
  // Put New ToDo content in DOM
  taskTitle.textContent = title;
  taskDesc.textContent = desc;
}
