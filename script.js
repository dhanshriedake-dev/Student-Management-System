function addStudent(){

let name=document.getElementById("name").value;

let roll=document.getElementById("roll").value;

let li=document.createElement("li");

li.innerHTML=name+" - "+roll;

document.getElementById("students").appendChild(li);

}
