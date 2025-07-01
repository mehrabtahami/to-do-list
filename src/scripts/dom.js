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
}

export function hideNewTaskModal() {
  document.getElementById("newtask-modal").style.opacity = "0";
}

function changeDomTaskStatusCheckbox() {
  const checkMarks = document.querySelectorAll(".task-status");
  checkMarks.forEach((item) => {
    item.addEventListener("click", (e) => {
      const clicked = e.target.closest(".task-status");
      if (!clicked.classList.contains("done")) {
        clicked.classList.add("done");
      } else {
        clicked.classList.remove("done");
      }
    });
  });
}
