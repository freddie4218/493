$(document).ready( function() {
    console.log("Ready!");
    document.getElementById("newTask").addEventListener("click", storeTask);
    document.getElementById("button1").addEventListener("click", addSubTask);
    document.getElementById("cancel").addEventListener("click", redirectToMain);

    localStorage.setItem("CurrSubtaskNum", 2);
});

function addSubTask() {
    let numSubtask = parseInt(localStorage.getItem("CurrSubtaskNum")) + 1;
    localStorage.setItem("CurrSubtaskNum", numSubtask);
    let subTasks = $('#subtask-list');
    subTasks.append("<li><label for=subtask" + numSubtask + ">Subtask " + numSubtask + ": </label><input type='text' id=subtask" + numSubtask + " name=subtask" + numSubtask +"><br></li>")
}


function storeTask() {
    let title = document.getElementById("title").value;
    if (title.trim() === '') {
        alert('Please enter a value for title');
        return
      }
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    let due = document.getElementById("due-date").value;
    let subTasks = [];
    for (let i = 1; i <= parseInt(localStorage.getItem("CurrSubtaskNum")); i++) {
        let subTaskID = "subtask" + i;
        let subTaskConent = document.getElementById(subTaskID).value;
        console.log("ID: ", subTaskID, ": ", subTaskConent);
        if (subTaskConent.trim() !== '') {
            subTasks.push(subTaskConent)
        }
        console.log(subTasks);
      }

    let id = parseInt(localStorage.getItem("prev_id")) + 1;
    localStorage.setItem("prev_id", id);
    
    event.preventDefault();
    let task_obj = {
        id: id,
        title: title,
        description: description,
        status: status,
        due: due,
        subTasks: subTasks
    };

    localStorage.setItem(id, JSON.stringify(task_obj));

    if(task_obj.status === "TODO") {
        let TODO = JSON.parse(localStorage.getItem('TODO'));
        TODO.push(task_obj);
        localStorage.setItem('TODO', JSON.stringify(TODO));
        }
    else if (task_obj.status === "DOING") {
        let DOING = JSON.parse(localStorage.getItem('DOING'));
        DOING.push(task_obj);
        localStorage.setItem('DOING', JSON.stringify(DOING));
    }
    else { // DONE
        let DONE = JSON.parse(localStorage.getItem('DONE'));
        DONE.push(task_obj);
        localStorage.setItem('DONE', JSON.stringify(DONE));
    }

    window.location.href = "main_page.html";
}

function redirectToMain() {
    window.location.href = "main_page.html";
}