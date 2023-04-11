// Main
$(document).ready( function() {
    newBoardButton = $('#add_new_board');
    console.log("Ready!");
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
            console.log(title);
            TODO_col.append("<div class='task'>" + title + "<br><div class='subtask'>0 of 2 subtasks done</div></div>")
        }
        // Then render the DOING column
        let DOING_col = $('#DOING');
        document.getElementById("DOING_num").innerHTML = "DOING (" + JSON.parse(localStorage.getItem('DOING')).length + ")";
        for (const task of JSON.parse(localStorage.getItem('DOING'))) {
            let title = task.title;
            let description = task.description;
            let status = task.status;
            console.log(title);
            DOING_col.append("<div class='task'>" + title + "<br><div class='subtask'>0 of 2 subtasks done</div></div>")
        }
        // Finally render the DONE column
        let DONE_col = $('#DONE');
        document.getElementById("DONE_num").innerHTML = "DONE (" + JSON.parse(localStorage.getItem('DONE')).length + ")";
        for (const task of JSON.parse(localStorage.getItem('DONE'))) {
            let title = task.title;
            let description = task.description;
            let status = task.status;
            console.log(title);
            DONE_col.append("<div class='task'>" + title + "<br><div class='subtask'>0 of 2 subtasks done</div></div>")
        }
    }
    
    document.getElementById("add_new_task_text").addEventListener("click", redirectToAddTask);
    newBoardButton.click(CreateNewBoard)

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