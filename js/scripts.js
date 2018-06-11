function Task(task) {
  this.taskName = task;
  this.isDone = false;
}

// var newTask = {
//   taskName: "walk the dog",
// }


$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var inputtedTask = $("input#taskInput").val();
    var newTask = new Task(inputtedTask);
    //display the newTask.taskName to to-do tasks List

    $("ul.toDo").append("<li class='list-item'>" + newTask.taskName + "</li>")

  })
})
