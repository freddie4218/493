$(function () {
    $(".column").sortable({
        connectWith: ".column",
        stop: function (event, ui) {
            var taskName = ui.item[0].innerText;
            var newStatus = ui.item.parent().prev().text();
            console.log(taskName + " moved to " + newStatus);
            // Delete the task from the column

        }
    }).disableSelection();
});

// Main
$(document).ready(function () {
    console.log("Ready!");
    localStorage.setItem("selectedTaskID", 0);
    localStorage.setItem("currTask", 0);
    localStorage.setItem("found", 0);

    document.getElementById("add_new_task_text").addEventListener("click", redirectToAddTask);
    // Initialize
    if (localStorage.getItem("prev_id") === null) {
        localStorage.setItem("prev_id", 0);
        let empty_list = [];
        localStorage.setItem('TODO', JSON.stringify(empty_list));
        localStorage.setItem('DOING', JSON.stringify(empty_list));
        localStorage.setItem('DONE', JSON.stringify(empty_list));
    } else {
        console.log(localStorage.getItem("prev_id"));
        // Render main page
        // First render the TODO column
        let TODO_col = $('#TODO');
        document.getElementById("TODO_num").innerHTML = "TODO (" + JSON.parse(localStorage.getItem('TODO')).length + ")";
        for (const task of JSON.parse(localStorage.getItem('TODO'))) {
            let title = task.title;
            let description = task.description;
            let status = task.status;
            let numOfSubtasks = task.subTasks.length;
            console.log(title);
            TODO_col.append("<ui class='task' id=" + task.id + ">" + title + "<br><div class='subtask'>" + numOfSubtasks + " subtasks</div></ui>")
            console.log("ID: ", task.id);
            document.getElementById(task.id).addEventListener("click", setSelectedIdAndRedirect);
        }
        // Then render the DOING column
        let DOING_col = $('#DOING');
        document.getElementById("DOING_num").innerHTML = "DOING (" + JSON.parse(localStorage.getItem('DOING')).length + ")";
        for (const task of JSON.parse(localStorage.getItem('DOING'))) {
            let title = task.title;
            let description = task.description;
            let status = task.status;
            let numOfSubtasks = task.subTasks.length;
            console.log(title);
            DOING_col.append("<ui class='task' id=" + task.id + ">" + title + "<br><div class='subtask'>" + numOfSubtasks + " subtasks</div></ui>")
            console.log("ID: ", task.id);
            document.getElementById(task.id).addEventListener("click", setSelectedIdAndRedirect);
        }
        // Finally render the DONE column
        let DONE_col = $('#DONE');
        document.getElementById("DONE_num").innerHTML = "DONE (" + JSON.parse(localStorage.getItem('DONE')).length + ")";
        for (const task of JSON.parse(localStorage.getItem('DONE'))) {
            let title = task.title;
            let description = task.description;
            let status = task.status;
            let numOfSubtasks = task.subTasks.length;
            console.log(title);
            DONE_col.append("<ui class='task' id=" + task.id + ">" + title + "<br><div class='subtask'>" + numOfSubtasks + " subtasks</div></ui>")
            console.log("ID: ", task.id);
            document.getElementById(task.id).addEventListener("click", setSelectedIdAndRedirect);
        }
    }
});



function CreateNewBoard() {
    all_boards = localStorage.getItem('all_boards');
    if (all_boards === null) {
        var defaultValue = {};
        localStorage.setItem('all_boards', JSON.stringify(defaultValue));
    }
    all_boards = JSON.parse(localStorage.getItem('all_boards'));

}

function redirectToAddTask() {
    window.location.href = "addNewTask_page.html";
}

function setSelectedIdAndRedirect(event) {
    event.preventDefault();
    console.log("RECEIVED ID: ", event.target.id);
    localStorage.setItem("selectedTaskID", event.currentTarget.id);
    console.log("SELECTED ID: ", localStorage.getItem("selectedTaskID"));

    if (!event.currentTarget.id) {
        window.location.href = "main_page.html";
    } else {
        window.location.href = "viewTask_page.html";
    }
}