import cssReset from "./styles/reset.css";
import css from "./styles/style.css";
import { domMonipulation, hideNewTaskModal } from "./scripts/dom";

const myToDo = [];

class ToDo {
  constructor(title, description, duedate) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
  }
}

// Form Date Submit - Create New ToDo with Class
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
        form.reset();
        hideNewTaskModal();
      });
  });
})();
