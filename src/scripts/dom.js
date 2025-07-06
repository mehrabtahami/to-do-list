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
  const modal = document.getElementById("newtask-modal");
  modal.style.opacity = "1";
  document.getElementById("newtask-modal").style.zIndex = "10";
  document.querySelector(".modal-backdrop").style.display = "block";
}

export function hideNewTaskModal() {
  document.getElementById("newtask-modal").style.opacity = "0";
  document.getElementById("newtask-modal").style.zIndex = "-10";
  document.querySelector(".modal-backdrop").style.display = "none";
}

function changeDomTaskStatusCheckbox() {
  const taskContainer = document.querySelector(".tasks-container");
  if (!taskContainer) {
    console.error("Error: Element with class '.tasks-container' not found.");
    return;
  }
  taskContainer.addEventListener("click", (e) => {
    const statusElement = e.target;
    const taskStatus = statusElement.closest(".task-status");
    if (statusElement.classList.contains("taskstatus")) {
      const clickedCard = statusElement.closest(".task-card");
      if (clickedCard) {
        taskStatus.classList.toggle("done");
      }
    }
  });
}

export function renderAllTasks(tasks) {
  const container = document.querySelector(".tasks-container");
  container.innerHTML = ""; // delete previous DOM container content
  tasks.forEach((task) => {
    showNewTaskOnDom(task.id, task.title, task.description, task.status);
  });
}

export function showNewTaskOnDom(id, title, desc, status) {
  const container = document.querySelector(".tasks-container");
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");
  taskCard.setAttribute("data-id", id);
  container.appendChild(taskCard);

  const taskTitle = document.createElement("h3");
  taskTitle.classList.add("task-title");
  taskCard.appendChild(taskTitle);

  const taskDesc = document.createElement("p");
  taskDesc.classList.add("task-summary");
  taskCard.appendChild(taskDesc);

  const taskStatus = document.createElement("span");
  taskStatus.classList.add("task-status");
  // اگر تسک وضعیت 'done' داشت، این کلاس را به آن اضافه می‌کنیم تا ظاهرش تغییر کند
  if (status === "done") {
    taskStatus.classList.add("done");
  }
  taskStatus.innerHTML = '<i class="bi bi-check2 taskstatus"></i>';
  taskCard.appendChild(taskStatus);

  const removeTask = document.createElement("div");
  removeTask.classList.add("task-remove");
  removeTask.innerHTML = '<i class="bi bi-trash3 removetask"></i>';
  taskCard.appendChild(removeTask);

  // Put New ToDo content in DOM
  taskTitle.textContent = title;
  taskDesc.textContent = desc;
}
