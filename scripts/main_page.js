// Main
$(document).ready( function() {
    newBoardButton = $('#add_new_board');
    console.log("Ready!");
    // Initialize
    if (localStorage.getItem("prev_id") === null) {
        localStorage.setItem("prev_id", 0);
        // localStorage.setItem("todo_id", 0);
        // localStorage.setItem("doing_id", 0);
        // localStorage.setItem("done_id", 0);
        localStorage.setItem('TODO', []);
        localStorage.setItem('DOING', []);
        localStorage.setItem('DONE', []);
    } else {
        console.log(localStorage.getItem("prev_id"));
        console.log(localStorage.getItem("TODO"));
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