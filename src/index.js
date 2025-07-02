import cssReset from "./styles/reset.css";
import css from "./styles/style.css";
import {
  domMonipulation,
  hideNewTaskModal,
  showNewTaskOnDom,
} from "./scripts/dom";

const myToDo = [];

class ToDo {
  constructor(title, description, duedate) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.status = "";
  }
  changeStatus() {
    if (this.status !== "done") {
      this.status = "done";
    } else {
      this.status = "";
    }
  }
}

// Create Some Test Default Dynamic ToDo Classes
(() => {
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
  showNewTaskOnDom(myToDo[0].title, myToDo[0].description);
  showNewTaskOnDom(myToDo[1].title, myToDo[1].description);
})();

// Form Date Submit - Create New ToDo with Class - get data from form modal DOM
(function () {
  const form = document.getElementById("newtask");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get Dom Form Data
    document
      .querySelector("#newtask .submit-btn")
      .addEventListener("click", () => {
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const dueDate = document.querySelector("#duedate").value;
        // Create New ToDo
        let newToDo = new ToDo(title, description, dueDate);
        myToDo.push(newToDo);
        showNewTaskOnDom(title, description);
        form.reset();
        hideNewTaskModal();
      });
  });
})();

// To Change Task Status in Array
(function () {
  const taskContainer = document.querySelector(".tasks-container");
  taskContainer.addEventListener("click", (e) => {
    const clickedCard = e.target.closest(".task-card");
    const title = clickedCard.querySelector(".task-title");
    for (let i in myToDo) {
      if (title.textContent === myToDo[i].title) {
        myToDo[i].changeStatus();
        break;
      }
    }
  });
})();
