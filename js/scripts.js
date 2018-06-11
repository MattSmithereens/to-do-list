function Task(task) {
  this.taskName = task;
  this.isDone = false;
}

$(document).ready(function() {
  $("#to-do").submit(function(e) {
    e.preventDefault();

    var inputtedTask = $("input#taskInput").val();
    var newTask = new Task(inputtedTask);
    //display the newTask.taskName to to-do tasks List

    $("ul.toDo").append("<li class='todo list-item'>" + newTask.taskName + "</li>")
    $("#taskInput").val("");

    $("ul.toDo").children("li").last().click(function(){
      $("ul.done").prepend("<li class='completed list-item'>" + newTask.taskName + "</li>")
      $(this).remove();
    });

  })
})
