$(document).ready(function() {
  $("form#tasks").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedDueDate = $("input#new-dueDate").val();
    var newTask = { task: inputtedTask, dueDate: inputtedDueDate };

    $("ul#taskList").append("<li><span class='task'>" + newTask.task + "</span></li>");

    $("input#new-task").val("");
    $("input#new-dueDate").val("");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.task);
      $("#dueDate").text(newTask.dueDate);
    });
  });
});
