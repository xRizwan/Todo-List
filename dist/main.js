!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);let l,r=["Default"];localStorage.getItem("projects")&&(console.log(JSON.parse(localStorage.getItem("projects"))),r=JSON.parse(localStorage.getItem("projects"))),l=0===r.length?"none":r[0];let o=document.querySelector("#addP");function d(){let e=document.querySelector("#projectListContainer"),t=document.querySelector("#pList");t.parentNode.removeChild(t),t=document.createElement("ul"),t.id="pList";for(let e of r){let n=document.createElement("li");n.classList.add("project"),n.id=""+e;let a=document.createElement("span");a.classList.add("material-icons"),a.textContent="dvr",n.appendChild(a);let l=document.createElement("span");l.textContent=""+e,l.dataset.name=""+e,l.classList.add("projectP"),n.appendChild(l);let r=document.createElement("span");r.classList.add("material-icons"),r.classList.add("pDelete"),r.textContent="delete",n.appendChild(r),t.appendChild(n),r.addEventListener("click",e=>{i(e)})}let n=document.createElement("li"),d=document.createElement("span");d.classList.add("material-icons"),d.id="addProject",d.textContent="add",n.appendChild(d),n.addEventListener("click",e=>{o.style.display="flex"}),t.appendChild(n),e.appendChild(t),document.querySelectorAll(".projectP").forEach(e=>{e.dataset.name===l&&e.classList.add("current")}),function(){let e=document.querySelectorAll(".projectP");e.forEach(t=>{t.addEventListener("click",n=>{e.forEach(e=>{e.dataset.name===l&&e.classList.remove("current")}),l=n.path[0].dataset.name,t.dataset.name===l?t.classList.add("current"):l in t.classList&&console.log(a),s(l)})})}()}function i(e){let t=e.path[0].parentNode.id,n=e.path[0].parentNode;e.path[0].parentNode.parentNode.removeChild(n);for(let e of r)if(e===t){let t=r.indexOf(e);r.splice(t,1)}for(let e=0;e<c.length;e++)if(c[e].project===t){if(document.querySelector("#tasks")){document.querySelector("#tasks").childNodes.forEach(t=>{t.dataset.title===c[e].title&&t.parentNode.removeChild(t)})}c.splice(e,1),e--}localStorage.setItem("projects",JSON.stringify(r)),localStorage.setItem("tasks",JSON.stringify(c))}let c=[];localStorage.getItem("tasks")&&(c=JSON.parse(localStorage.getItem("tasks")));function s(e){let t,n=0,a=document.getElementById("tasks");a?(t=a.parentElement,a.parentElement.removeChild(a)):t=document.querySelector("#tasksContainer"),a=document.createElement("div"),a.id="tasks";let r=!1;for(let t of c)if(t.project===e){r=!0;let e=document.createElement("div"),o=document.createElement("div"),d=document.createElement("span"),i=document.createElement("span"),p=document.createElement("span"),m=document.createElement("span"),f=document.createElement("span"),y=document.createElement("span");e.classList.add("task"),e.dataset.title=""+t.title,e.dataset.key=""+n,n++,o.classList.add("material-icons"),o.classList.add(""+t.priority.toLowerCase()),o.classList.add("priority"),o.textContent="panorama_fish_eye",e.appendChild(o),d.textContent=""+t.title,d.classList.add("title"),e.appendChild(d),i.classList.add("description"),t.description.length>49?i.textContent=""+t.description.substring(0,49):i.textContent=""+t.description,e.appendChild(i),p.classList.add("material-icons"),p.classList.add("delete"),p.textContent="delete_forever",e.appendChild(p),m.classList.add("material-icons"),m.classList.add("edit"),m.textContent="edit",e.appendChild(m),f.classList.add("material-icons"),f.classList.add("done"),f.textContent="done",e.appendChild(f),y.classList.add("dueDate"),y.textContent=""+t.dueDate,e.appendChild(y),a.appendChild(e),p.addEventListener("click",e=>{u(e)}),f.addEventListener("click",e=>{alert("Congrats!, You're Awesome."),u(e)});let v=document.querySelector("#editT"),S=document.querySelector(".quitTE"),g=document.querySelector("#eTName"),h=document.querySelector("#eTDate"),E=document.querySelector("#eTDesc"),L=document.querySelector("#eTSubmit");S.addEventListener("click",()=>{v.style.display="none",document.querySelector(".changing").classList.remove("changing")}),L.addEventListener("click",e=>{let t=document.querySelector(".changing");if(!t)return;e.preventDefault(),e.stopPropagation();let n=t.dataset.title,a=g.value,r=h.value,o=E.value,d=document.querySelector("input[name=Tpriority]:checked").value;for(let e=0;e<c.length;e++)if(c[e].title===n){""!==a&&(c[e].title=a),""!==r&&(c[e].dueDate=r),""!==o&&(c[e].description=o),c[e].priority=d;break}s(l),g.value="",h.value="",E.value="",v.style.display="none",t.classList.remove("changing")}),m.addEventListener("click",e=>{let t=e.path[0].parentElement.dataset.title;e.path[0].parentElement.classList.add("changing"),v.style.display="flex";for(let e=0;e<c.length;e++)if(c[e].title===t){g.value=c[e].title,E.value=c[e].description,h.value=c[e].dueDate;break}})}r&&t.insertBefore(a,document.querySelector(".tooltip"))}function u(e){let t=e.path[0].parentElement,n=t.dataset.title;t.parentElement.removeChild(t);for(let e=0;e<c.length;e++)c[e].title===n&&(c.splice(e,1),e--);localStorage.setItem("tasks",JSON.stringify(c))}function p(e){let t=document.querySelector("#addProject"),n=document.querySelector("#addP"),a=document.querySelector("#pSubmit"),l=document.querySelector(".quit"),r=document.querySelector("#pName");l.addEventListener("click",e=>n.style.display="none"),a.addEventListener("click",t=>{t.preventDefault();let a=r.value;""!==a?(r.value="",function(e,t){e.push(t),localStorage.setItem("projects",JSON.stringify(e))}(e,a),n.style.display="none",d()):alert("Title cannot be Empty!")}),t.addEventListener("click",e=>{e.preventDefault(),n.style.display="flex"})}s(l),function(){let e=document.querySelector("#addTask"),t=document.querySelector("#addT"),n=document.querySelector(".quitT"),a=document.querySelector("#tName"),o=document.querySelector("#tDate"),d=document.querySelector("#tDesc"),i=document.querySelector("#tSubmit");n.addEventListener("click",()=>t.style.display="none"),i.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),r.length<1)return void alert("No Project Exists");if("none"===l)return void alert("No Project is Selected");{let e=!1;for(let t of r)if(t===l){e=!0;break}if(!e)return void alert("No Project is Selected")}let n=document.querySelector("input[name=priority]:checked").value,i=a.value,u=o.value,p=d.value;if(""===i)return void alert("Title Cant be Empty");if(""===u)return void alert("No date specified");let m=(new Date).getFullYear();if(parseInt(u.substring(0,4))<m)return void alert("due date cant be less than today");a.value="",o.value="",d.value="";let f=function(e,t,n,a,l){return{title:e=e,description:t=t,dueDate:n=n,priority:a=a,project:l=l}}(i,p,u,n,l);var y;y=f,c.push(y),console.log(c),localStorage.setItem("tasks",JSON.stringify(c)),t.style.display="none",s(l)}),e.addEventListener("click",()=>t.style.display="flex")}(),d(),p(r)}]);