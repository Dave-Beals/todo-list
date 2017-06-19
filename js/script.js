console.log("script is working!")

// FROM ELOQUENT JAVASCRIPT. MAYBE USEFUL?
// var form = document.querySelector("form");
// console.log(form.elements[1].type);


var tasks = []

var taskTitle = [];
var person = [];
var difficulty = [];
var taskInput = document.getElementById("task");
var nameInput = document.forms[0];
var difficultyInput = document.getElementById("difficulty");
var diffSelected = difficultyInput.options[difficultyInput.selectedIndex].value;

// var nameInput = document.getElementById("name");
// var difficultyInput = document.getElementById("difficulty");

function taskList(){
  taskTitle.push(taskInput.value);
  // console.log(task[0]);

  for(i = 0; i<nameInput.length; i++){
    if(nameInput[i].checked){
      person.push(nameInput[i].value);
      // console.log(person[0]);

  difficulty.push(diffSelected);
  // console.log(difficulty[0]);

  tasks.push(taskTitle[0], person[0], difficulty[0]);
  console.log(tasks);

  presentTask();
    }
  }
}

function presentTask(){
var container = document.getElementById("container");
container.innerHTML = "";
for(var i = 0; i < tasks.length; i++){
  var newNode = document.createElement("li");
  newNode.innerHTML = tasks[i];
  container.appendChild(newNode);
  event.preventDefault();
  }
}





// BELOW IS POSSIBLY RELEVANT FROM CLASS EXAMPLE
// function tasksList(){
//   window.onload = function(){
//   drawToPage();
//   var trigger = document.getElementById("trigger");
//   trigger.onsubmit = updatePage;
// }
