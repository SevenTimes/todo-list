(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{d:()=>c});class t{constructor(e,t,n,d){this.title=e,this.description=t,this.dueDate=n,this.priority=d}}const n=document.getElementById("title"),d=document.getElementById("description"),a=document.getElementById("dueDate");document.getElementById("add-task").addEventListener("click",(()=>{const e=document.querySelector('input[name="priority"]:checked').value,i=new t(n.value,d.value,a.value,e);c.push(i),document.getElementById("add-task-modal").style.display="none",n.value="",d.value="",a.value="",c.forEach((e=>{const t=document.getElementById("task-list"),n=document.createElement("div");n.classList.add("task");const d=document.createElement("h1");d.innerText=e.title,n.appendChild(d);const a=document.createElement("p");a.innerText=e.description,n.appendChild(a);const c=document.createElement("div"),i=document.createElement("span");i.innerText=e.dueDate,c.appendChild(i);const l=document.createElement("span");l.innerText=e.priority,c.appendChild(l),n.appendChild(c),t.appendChild(n)}))}));let c=[]})();