import { currentProject } from "./projects";

// the array containing tasks
let tasks = [];
if (localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

// object to make new Tasks
const Task = function(title, description, dueDate, priority, project) {
    title = title;
    description = description;
    dueDate = dueDate;
    priority = priority;
    project = project;

    return {
        title,
        description,
        dueDate,
        priority,
        project
    }
}

// function to display task based on the currently Selected Project
function displayTasks(currentP){
    // for the data-key value of each task
    let nth = 0;

    // getting elements
    let taskContainer = document.getElementById("tasks");

    let outerTaskContainer;

    // if taskContainer exists then remove it and set it's parentElement as the outerTaskContainer
    if (taskContainer){
        outerTaskContainer = taskContainer.parentElement;
        // deleting the current taskContainer
        taskContainer.parentElement.removeChild(taskContainer);
    }
    // otherwise find the outerTaskContainer on the DOM
    else {
         outerTaskContainer = document.querySelector("#tasksContainer");
    }

    // creating a new task container
    taskContainer = document.createElement("div");
    taskContainer.id = "tasks";

    // if no task is found then taskExists is false
    let taskExists = false;

    for(let task of tasks){

        // if the task is for the current project
        if  (task.project === currentP){
            taskExists = true;

            // creating elements
            let currentTaskContainer = document.createElement("div");
            let priorityIcon = document.createElement("div");
            let title = document.createElement("span");
            let description = document.createElement("span");
            let deleteIcon = document.createElement("span");
            let editIcon = document.createElement("span");
            let finishedIcon = document.createElement("span");
            let dueDate = document.createElement("span");

            // addings classes and attributes
            currentTaskContainer.classList.add("task");
            currentTaskContainer.dataset.title = `${task.title}`;
            currentTaskContainer.dataset.key = `${nth}`;
            nth++;

            // the priority icon and it's color
            priorityIcon.classList.add("material-icons");
            priorityIcon.classList.add(`${task.priority.toLowerCase()}`);
            priorityIcon.classList.add("priority");
            priorityIcon.textContent = 'panorama_fish_eye';
            currentTaskContainer.appendChild(priorityIcon)

            // the title of the task
            title.textContent = `${task.title}`;
            title.classList.add("title");
            currentTaskContainer.appendChild(title);

            // description of the task
            description.classList.add("description");

            // if descriptions length is greatar than 49 then get it's substring
            // else just display it all
            if (task.description.length > 49){
                description.textContent = `${task.description.substring(0, 49)}`;
            }
            else {
                description.textContent = `${task.description}`;
            }
            currentTaskContainer.appendChild(description);

            // for the delete Icon
            deleteIcon.classList.add("material-icons");
            deleteIcon.classList.add("delete");
            deleteIcon.textContent = "delete_forever";
            currentTaskContainer.appendChild(deleteIcon);

            // for the edit icon
            editIcon.classList.add("material-icons");
            editIcon.classList.add("edit");
            editIcon.textContent = "edit";
            currentTaskContainer.appendChild(editIcon);

            // for the finished icon
            finishedIcon.classList.add("material-icons");
            finishedIcon.classList.add("done");
            finishedIcon.textContent = "done";
            currentTaskContainer.appendChild(finishedIcon);

            // for the dueDate of the task
            dueDate.classList.add("dueDate");
            dueDate.textContent = `${task.dueDate}`;
            currentTaskContainer.appendChild(dueDate);

            // append to the div
            taskContainer.appendChild(currentTaskContainer);

            // adding eventListeners from delete, edit, finished btns

            // for delete button
            deleteIcon.addEventListener("click", (e) => {
                deleteTask(e);
            })

            // for finished button
            finishedIcon.addEventListener("click", (e) => {
                alert("Congrats!, You're Awesome.");
                deleteTask(e);
            })

            // getting elements from the DOM
            let editTaskForm = document.querySelector("#editT");
            let quitBtn = document.querySelector(".quitTE")
            let nameField = document.querySelector("#eTName");
            let dueDateField = document.querySelector("#eTDate");
            let descriptionField = document.querySelector("#eTDesc");
            let submitBtn = document.querySelector("#eTSubmit");


            // letting user click on the X button to quit
            quitBtn.addEventListener("click", () => {
                editTaskForm.style.display = "none"
                let changingClass = document.querySelector(".changing");
                changingClass.classList.remove("changing");
            });

            // click event when user presses the submit btn
            submitBtn.addEventListener("click", (e) => {
                let changingClass = document.querySelector(".changing");

                if (!changingClass){
                    return;
                }

                // preventing the default behaviour of the browser.. i.e reloading the page
                e.preventDefault();
                e.stopPropagation();

                // getting value of the feilds from their respective fields
                let oldTitle = changingClass.dataset.title;
                let name = nameField.value;
                let dueDate = dueDateField.value;
                let description = descriptionField.value;
                let priority = document.querySelector("input[name=Tpriority]:checked").value;

                // find the task and change it
                for (let i = 0; i < tasks.length; i++){
                    if (tasks[i].title === oldTitle){
                        if (name !== ""){
                            tasks[i].title = name;
                        }
                        if (dueDate !== ""){
                            tasks[i].dueDate = dueDate;
                        }
                        if (description !== ""){
                            tasks[i].description = description;
                        }
                        tasks[i].priority = priority;
                        break;
                    }
                }
                displayTasks(currentProject);

                // empyting the values
                nameField.value = "";
                dueDateField.value = "";
                descriptionField.value = "";

                // making the form invisible
                editTaskForm.style.display = "none";
                changingClass.classList.remove("changing");
            })

            // for the edit button
            editIcon.addEventListener("click", (e) => {

                // get the title of the task being changed
                // add a class of changing to the task being changed
                let editedTitle = e.path[0].parentElement.dataset.title;
                e.path[0].parentElement.classList.add("changing");

                editTaskForm.style.display = "flex";

                // find the task and populate the fields with it's values
                for (let i = 0; i < tasks.length; i++){
                    if (tasks[i].title === editedTitle){
                        nameField.value = tasks[i].title;
                        descriptionField.value = tasks[i].description;
                        dueDateField.value = tasks[i].dueDate;
                        break;
                    }
                }
            })
        }
    }

    // if tasks related to current project are found then append them to the DOM.
    // before the add button
    if (taskExists){
        outerTaskContainer.insertBefore(taskContainer, document.querySelector(".tooltip"));
    }
}

function deleteTask(event){
    let deletedTask = event.path[0].parentElement;
    let deletedTaskTitle = deletedTask.dataset.title;

    // delete from DOM
    deletedTask.parentElement.removeChild(deletedTask);

    // delete from Task Array
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].title === deletedTaskTitle){
            tasks.splice(i, 1);
            i--;
        }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// exporting
export { Task , tasks, displayTasks };