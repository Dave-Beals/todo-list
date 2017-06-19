console.log("I'm working!")

// FROM ELOQUENT JAVASCRIPT. MAYBE USEFUL?
// var form = document.querySelector("form");
// console.log(form.elements[1].type);


var taskArray = []

var task = [];
var person = [];
var difficulty = [];
var taskNames = document.forms[0];

var taskInput = document.getElementById("task");
// var nameInput = document.getElementById("name");
// var difficultyInput = document.getElementById("difficulty");

var theTask = document.getElementById("container");

function taskList(){
  task.push(taskInput.value);
  console.log(task[0]);

  for(i = 0; i<taskNames.length; i++){
    if(taskNames[i].checked){
      person.push(taskNames[i].value);
      console.log(person[0]);
    }
  }
  // difficulty.push(difficultyInput.value);
}

// function taskList(){
//   if(document.getElementById("taskDave").checked)
//     name.push()
// }

// BELOW IS POSSIBLY RELEVANT FROM CLASS EXAMPLE
// function tasksList(){
//   window.onload = function(){
//   drawToPage();
//   var trigger = document.getElementById("trigger");
//   trigger.onsubmit = updatePage;
// }
