$(document).ready(function () {
    console.log("Ready!");
    document.getElementById("returnToMain").addEventListener("click", redirectToMain);
    document.getElementById("delete").addEventListener("click", deleteTask);

    console.log("selectedTaskID", localStorage.getItem("selectedTaskID"));

    let task;
    let task_id = parseInt(localStorage.getItem("selectedTaskID"));
    let found = "";

    // Let first find the task
    for (const t of JSON.parse(localStorage.getItem('TODO'))) {
        if (parseInt(t.id) === task_id) {
            task = t;
            found = "TODO";
            temp_column = JSON.parse(localStorage.getItem(found))

        }
    }
    if (found === "") {
        for (const t of JSON.parse(localStorage.getItem('DOING'))) {
            if (parseInt(t.id) === task_id) {
                task = t;
                found = "DOING";
                break;
            }
        }
    }
    if (found === "") {
        for (const t of JSON.parse(localStorage.getItem('DONE'))) {
            if (parseInt(t.id) === task_id) {
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
        subtasks.append("<div>Subtask " + count + ": " + subT + "</div>")
        count += 1;
    }

}
);


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

function deleteTask() {
    console.log('delete task');
    taskID = parseInt(localStorage.getItem("selectedTaskID"));
    // console.log(localStorage.getItem('TODO'))
    found = "";
    console.log(localStorage.getItem('TODO'))
    console.log(localStorage.getItem('DOING'))
    console.log(localStorage.getItem('DONE'))

    for (const t of JSON.parse(localStorage.getItem('TODO'))) {
        if (parseInt(t.id) === taskID) {
            console.log(t.id)
            task = t;
            found_2 = "TODO";
            // new_json = JSON.parse({});
            let empty_list = [];
            var new_json = JSON.parse("[]");
            // new_json = [];
            // localStorage.setItem('new_json', JSON.stringify([]));
            console.log(localStorage.getItem('TODO'))
            for (const s of JSON.parse(localStorage.getItem('TODO'))) {
                if (s.id !== taskID) {
                    new_json.push(s);
                }
            }
            localStorage.setItem(found_2, JSON.stringify(new_json));
            console.log(new_json)
        }
        window.location.href = "main_page.html";
        break;
    }
    if (found === "") {
        for (const t of JSON.parse(localStorage.getItem('DOING'))) {
            if (parseInt(t.id) === taskID) {
                task = t;
                found_2 = "DOING";
                // new_json = JSON.stringify({});
                var new_json = JSON.parse("[]");
                for (const s of JSON.parse(localStorage.getItem('DOING'))) {
                    if (s.id !== taskID) {
                        new_json.push(s);
                    }
                }
                localStorage.setItem(found_2, JSON.stringify(new_json));
            }
            window.location.href = "main_page.html";
            break;
        }
        if (found === "") {
            for (const t of JSON.parse(localStorage.getItem('DONE'))) {
                if (parseInt(t.id) === taskID) {
                    task = t;
                    found_2 = "DONE";
                    // new_json = JSON.stringify({});
                    var new_json = JSON.parse("[]");
                    for (const s of JSON.parse(localStorage.getItem('DONE'))) {
                        if (s.id !== taskID) {
                            new_json.push(s);
                        }
                    }
                    localStorage.setItem(found_2, JSON.stringify(new_json));
                }
                window.location.href = "main_page.html";
                break;
            }
        }
    }
}