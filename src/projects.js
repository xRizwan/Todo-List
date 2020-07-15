import { displayTasks, tasks } from "./tasks";

// project array
let projects = ["Default"];
if (localStorage.getItem("projects")){
    console.log(JSON.parse(localStorage.getItem("projects")));
    projects = JSON.parse(localStorage.getItem("projects"));
}


let currentProject;
// if there are no projects then no project is the current one
if (projects.length === 0){
    currentProject = "none";
}
else {
    // by default its the first project
    currentProject = projects[0];
}

let changeCurrentProject = function(){
    let allProjects = document.querySelectorAll(".projectP");
    allProjects.forEach(project => {
        project.addEventListener("click", (e) => {

            // remove the project that previously has the current class on it
            allProjects.forEach(p => {
                if (p.dataset.name === currentProject){
                    p.classList.remove("current");
                }
            })

            // new current project
            currentProject = e.path[0].dataset.name;

            // find the new current project and add the current class to it;
            if (project.dataset.name === currentProject){
                project.classList.add("current");
            }
            else if(currentProject in project.classList){
                console.log(a);
            }

            displayTasks(currentProject);
        })
    })
}

    // by default the currentProject is the first one;

// caching DOM
let addProjectField = document.querySelector("#addP")

function displayProjects() {
    let projectsContainer = document.querySelector("#projectListContainer")
    let projectList = document.querySelector("#pList");

    // deleting already existing ones;
    projectList.parentNode.removeChild(projectList);

    // creating unordered list
        projectList = document.createElement("ul");
        projectList.id = "pList";

    for (let project of projects){

        //<span class="material-icons delete">delete_forever</span>
        //<span class="material-icons edit">edit</span>

        // creating listItem and setting its class and ID
        let listItem = document.createElement("li");
        listItem.classList.add("project");
        listItem.id = `${project}`;
        //listItem.dataset.name = `${project}`;

        // adding to the listItem
        //listItem.innerHTML = `<span class="material-icons">dvr</span> ${project}
        //<span class="material-icons pDelete">delete_forever</span>`

        let dvr = document.createElement("span");
        dvr.classList.add("material-icons");
        dvr.textContent = "dvr";
        listItem.appendChild(dvr);

        let content = document.createElement("span");
        content.textContent = `${project}`;
        content.dataset.name = `${project}`;
        content.classList.add("projectP")
        listItem.appendChild(content);

        let deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-icons");
        deleteIcon.classList.add("pDelete");
        deleteIcon.textContent = "delete";
        listItem.appendChild(deleteIcon);

        // appending to the list
        projectList.appendChild(listItem);

        //adding onclickevent for the delete and edit btns.
        deleteIcon.addEventListener("click", e => {
            deleteProject(e);
        });
    }


    // creating and add  button to add new Projects
    let add = document.createElement("li");
    
        // creating its icon
        let addIcon = document.createElement("span");
        addIcon.classList.add("material-icons");
        addIcon.id = "addProject";
        addIcon.textContent = "add";
        // appending icon to the btn
        add.appendChild(addIcon);
        add.addEventListener("click", (e)=> {
            addProjectField.style.display = "flex";
        })

    // appending to the DOM
    projectList.appendChild(add);
    projectsContainer.appendChild(projectList);
    
    let allProjects = document.querySelectorAll(".projectP");
    allProjects.forEach((project) => {
        if (project.dataset.name === currentProject){
            project.classList.add("current");
        }
    })
    // allowing user to change current Project by clicking on them
    changeCurrentProject();
}

// function that fires when the delete button is clicked
function deleteProject(event){
    let deletedProject = event.path[0].parentNode.id;
    let parent = event.path[0].parentNode 
    event.path[0].parentNode.parentNode.removeChild(parent);

    // delete the project from the project list
    for (let project of projects){
        if (project === deletedProject){
            let index = projects.indexOf(project);
            projects.splice(index, 1);
        }
    }

    // delete each task associated with that project
    for (let i = 0; i < tasks.length; i++){

        // if task found
        if (tasks[i].project === deletedProject){

            // get it from the and delete it
            let allDomTasks = document.querySelector("#tasks");

            if (allDomTasks){
            let taskInDom = document.querySelector("#tasks").childNodes;
            taskInDom.forEach(task => {
                if (task.dataset.title === tasks[i].title){
                    task.parentNode.removeChild(task);
                }
            })
            }

            // delete it from the array
            tasks.splice(i, 1);
            i--;
        }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export { projects, currentProject, displayProjects, changeCurrentProject };