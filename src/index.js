import cssReset from "./styles/reset.css";
import css from "./styles/style.css";
import {
  hideNewTaskModal,
  showNewTaskOnDom,
  renderAllTasks,
} from "./scripts/dom";

let myToDo = [];

class ToDo {
  constructor(
    title,
    description,
    duedate,
    status = "",
    id = crypto.randomUUID()
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.status = status;
  }
  changeStatus() {
    if (this.status !== "done") {
      this.status = "done";
    } else {
      this.status = "";
    }
  }
}

// LocalStorage function to save ToDo array in user web browser storage
function saveTasksToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(myToDo));
}

// function to Load ToDo array from localstorage
function loadTasksFromLocalStorage() {
  const savedTasks = localStorage.getItem("todos");

  if (savedTasks) {
    const parsedTasks = JSON.parse(savedTasks);

    myToDo = parsedTasks.map(
      (task) =>
        new ToDo(
          task.title,
          task.description,
          task.duedate,
          task.status,
          task.id
        )
    );
    renderAllTasks(myToDo);
  } else {
    // if there is nothing in localstorage create some test
    const test1 = new ToDo(
      "Feeding Dog",
      "Feeding Dog Every 8 Hours",
      "2025-07-15"
    );
    const test2 = new ToDo(
      "Drink Water",
      "Drink Water Every 4 Hours",
      "2025-09-20"
    );
    myToDo.push(test1, test2);
    renderAllTasks(myToDo);
    saveTasksToLocalStorage();
  }
}

// call the loadint tasks function first when site loads
document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

// Form Date Submit - Create New ToDo with Class - get data from form modal DOM
(function () {
  const form = document.getElementById("newtask");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#duedate").value;
    // Create New ToDo
    let newToDo = new ToDo(title, description, dueDate);
    myToDo.push(newToDo);
    showNewTaskOnDom(newToDo.id, title, description);
    saveTasksToLocalStorage();
    form.reset();
    hideNewTaskModal();
  });
})();

// To Change Task Status in Array
(function () {
  const taskContainer = document.querySelector(".tasks-container");
  taskContainer.addEventListener("click", (e) => {
    const clicked = e.target;
    const id = clicked.closest(".task-card").getAttribute("data-id");
    if (clicked.classList.contains("taskstatus")) {
      for (let i in myToDo) {
        if (id === myToDo[i].id) {
          myToDo[i].changeStatus();
          saveTasksToLocalStorage();
          break;
        }
      }
    }
  });
})();

// Remove ToDo from DOM & Array Function
(function () {
  const taskContainer = document.querySelector(".tasks-container");
  taskContainer.addEventListener("click", (e) => {
    const clicked = e.target;
    const card = clicked.closest(".task-card");
    const id = clicked.closest(".task-card").getAttribute("data-id");
    if (clicked.classList.contains("removetask")) {
      for (let i in myToDo) {
        if (myToDo[i].id === id) {
          card.remove(); // remove from DOM
          myToDo.splice(i, 1); // remove from array
          saveTasksToLocalStorage();
          break;
        }
      }
    }
  });
})();
