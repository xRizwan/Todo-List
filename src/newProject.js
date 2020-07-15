import { displayProjects} from "./projects"

function addProject(projectsArr){

    // caching DOM
    let newProject = document.querySelector("#addProject");
    let addProjectField = document.querySelector("#addP")
    let submitBtn = document.querySelector("#pSubmit");
    let quitBtn = document.querySelector(".quit");
    let nameField = document.querySelector("#pName");

    // let user quit by pressing the X Button
    quitBtn.addEventListener("click", (e) => addProjectField.style.display = "none");

    submitBtn.addEventListener("click", (e) => {
        // prevent it from reloading the page
        e.preventDefault();

        // save the Names and clear the field
        let name = nameField.value;
        if (name === ""){
            alert("Title cannot be Empty!");
            return
        }
        nameField.value = '';

        // push project to the projectArr
        pushToProjects(projectsArr,name);
        addProjectField.style.display = "none";
        displayProjects();
    })

    // everyTime the add btn is clicked display the from
    newProject.addEventListener("click", (e) => {
        // prevent the default behaviour
        e.preventDefault();

        addProjectField.style.display = "flex";
    })
}

// funtion to add projects to the project array
function pushToProjects(projectsArr,project) {
    projectsArr.push(project);
    localStorage.setItem("projects", JSON.stringify(projectsArr));
}

export { addProject };