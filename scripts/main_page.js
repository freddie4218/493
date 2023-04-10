// Main
$(document).ready( function() {
    console.log("Ready!");
    document.getElementById("add_new_task_text").addEventListener("click", redirectToAddTask);


});


function redirectToAddTask() {
    window.location.href = "addNewTask_page.html";
}
