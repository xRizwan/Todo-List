import { Task, tasks, displayTasks } from "./tasks"
import { currentProject, projects } from "./projects"
// git check

function addNewTask(){

    // caching DOM
    let addTaskBtn = document.querySelector("#addTask");
    let addTaskForm = document.querySelector("#addT");
    let quitBtn = document.querySelector(".quitT")
    let nameField = document.querySelector("#tName");
    let dueDateField = document.querySelector("#tDate");
    let descriptionField = document.querySelector("#tDesc");
    let submitBtn = document.querySelector("#tSubmit");

    // letting user click on the X button to quit
    quitBtn.addEventListener("click", () => addTaskForm.style.display = "none");

    // click event when user presses the submit btn
    submitBtn.addEventListener("click", (e) => {

        // preventing the default behaviour of the browser.. i.e reloading the page
        e.preventDefault();
        e.stopPropagation();


        // if no project exists or none is selected quit
        if (projects.length < 1){
            alert("No Project Exists");
            return;
        }
        else{
            if (currentProject === "none"){
                alert("No Project is Selected");
                return;
            }
            else{

                // find if the currentProject hasn't been deleted yet
                let exists = false;
                for (let project of projects){
                    if (project === currentProject){
                        exists = true;
                        break;
                    }
                }
                if (!exists){
                    alert("No Project is Selected");
                    return;
                }
            }
        }

        // getting value of the feilds from their respective fields
        let priority = document.querySelector("input[name=priority]:checked").value;
        let name = nameField.value;
        let dueDate = dueDateField.value;
        let description = descriptionField.value;
        if(name === ""){
            alert("Title Cant be Empty");
            return
        }
        if(dueDate === ""){
            alert("No date specified");
            return;
        }
        let currentYear = new Date().getFullYear();
        let dueYear = parseInt(dueDate.substring(0, 4));
        if (dueYear < currentYear){
            alert("due date cant be less than today")
            return;
        }

        // empyting the values
        nameField.value = "";
        dueDateField.value = "";
        descriptionField.value = "";

        // creating a new task with those fields
        let nTask = Task(name, description, dueDate, priority, currentProject);
        pushToTasks(tasks,nTask);
        console.log(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // making the form invisible
        addTaskForm.style.display = "none";
        displayTasks(currentProject);
    })

    // adding click event handler when addTask btn is clicked
    // to make the form visible
    addTaskBtn.addEventListener("click", () => addTaskForm.style.display = "flex");
}

// adding the task to tasks array
function pushToTasks(taskArr, task){
    taskArr.push(task);
}

export { addNewTask };