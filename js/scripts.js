$(document).ready(function() {
  $("form#tasks").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedDueDate = $("input#new-dueDate").val();
    var newTask = { task: inputtedTask, dueDate: inputtedDueDate };

    $("ul#taskList").append("<li><input type='checkbox' id='checkOff'></input><span class='task'>" + newTask.task + "</span></li>");
    $("ul#taskList").append("<li onclick='$(this).remove();'>" + "<input type='hidden' name='show-completed-tasks'>" + "</li>")

    $("input#new-task").val("");
    $("input#new-dueDate").val("");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.task);
      $("#dueDate").text(newTask.dueDate);
    });

    $("#checkOff").last().click(function() {
      $("#show-completed-tasks").show();
      $("#show-completed-tasks").text(newTask.task);
    })
  });
});

// function selectTasks(select)
// {
//   var $ul = $(select).prev('ul');
//
//   if ($ul.find('input[value=' + $(select).val() + ']').length == 0)
//     $ul.append('<li onclick="$(this).remove();">' +
//       '<input type="hidden" name="ingredients[]" value="' +
//       $(select).val() + '" /> ' +
//       $(select).find('option[selected]').text() + '</li>');
// }
