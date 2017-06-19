var taskArray = []
var taskInput = document.getElementById("task");
var nameInput = document.getElementById("name");
var difficultyInput = document.getElementById("difficulty");

function tasksList(){
  var submit = event.target;
  var container = document.getElementById("taskOverview");
  if(submit.clicked){
    taskArray.push(submit.id)
  }
}

tasks.onsubmit = function(){
  drawToPage();
  var trigger = document.getElementById("trigger");
  trigger.onclick = updatePage;
}
function updatePage() {
  taskArray.push()
}

// function tasksList(){
//   window.onload = function(){
//   drawToPage();
//   var trigger = document.getElementById("trigger");
//   trigger.onsubmit = updatePage;
// }
