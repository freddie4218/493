$(document).ready( function() {
    console.log("Ready!");
    document.getElementById("returnToMain").addEventListener("click", redirectToMain);
    console.log(localStorage.getItem("selectedTaskID"));

    let task;
    let taskID = parseInt(localStorage.getItem("selectedTaskID"));
    let found = "";

    // Let first find the task
    for (const t of JSON.parse(localStorage.getItem('TODO'))) {
        if (parseInt(t.id) === taskID) {
            task = t;
            found = "TODO";
            break;
        }
    }
    if (found === "") {
        for (const t of JSON.parse(localStorage.getItem('DOING'))) {
            if (parseInt(t.id) === taskID) {
                task = t;
                found = "DOING";
                break;
            }
        }
    }
    if (found === "") {
        for (const t of JSON.parse(localStorage.getItem('DONE'))) {
            if (parseInt(t.id) === taskID) {
                task = t;
                found = "DONE";
                break;
            }
        }
    }

    console.log(task);
    localStorage.setItem("currTask", JSON.stringify(task));
    localStorage.setItem("found", found);

    document.getElementById("title").innerHTML = task.title;
    document.getElementById("description").innerHTML = "Description: " + task.description;

    subtasks = $('#subtaskList');
    let count = 1;
    for (const subT of task.subTasks) {
        subtasks.append("<div>Subtask " + count + ": " +  subT + "</div>")
        count += 1;
    }

});


function redirectToMain() {
    let chosenStatus = document.getElementById("Status").value;
    let task = JSON.parse(localStorage.getItem("currTask"));
    let whereFound = localStorage.getItem("found")

    console.log(chosenStatus, task, whereFound)

    if (chosenStatus === whereFound) {
        window.location.href = "main_page.html";
    } else {
        task.status = chosenStatus;
        let list = JSON.parse(localStorage.getItem(whereFound));
        let idx = 0;
        for (const t of list) {
            if (parseInt(t.id) === parseInt(task.id)) {
                break;
            } else {
                idx += 1;
            }
        }
        list.splice(idx, 1);

        let list_2 = JSON.parse(localStorage.getItem(chosenStatus));
        list_2.push(task);

        localStorage.setItem(chosenStatus, JSON.stringify(list_2));
        localStorage.setItem(whereFound, JSON.stringify(list));

        window.location.href = "main_page.html";
    }

    // window.location.href = "main_page.html";
}