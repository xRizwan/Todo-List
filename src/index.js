// importing
import { displayTasks } from "./tasks.js"
import { displayProjects, projects , currentProject} from "./projects.js"
import { addProject } from "./newProject.js";
import { addNewTask } from "./newTask.js"


(function operate() {
    displayTasks(currentProject);
    addNewTask();
    displayProjects();
    addProject(projects);})();