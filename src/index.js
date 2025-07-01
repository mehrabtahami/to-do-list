import cssReset from "./styles/reset.css";
import css from "./styles/style.css";
import { domMonipulation } from "./scripts/dom";

class ToDo {
  constructor(title, description, duedate) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
  }
}
