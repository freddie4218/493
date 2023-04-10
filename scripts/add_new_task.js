$(document).ready( function() {
    console.log("Ready!");
    document.getElementById("newTask").addEventListener("click", storeTask);
    // document.getElementById("newTask").addEventListener("click", redirectToMain);
});


function storeTask() {
    let id = parseInt(localStorage.getItem("prev_id")) + 1;
    localStorage.setItem("prev_id", id);
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    let due = document.getElementById("due-date").value;
    
    event.preventDefault();
    let task_obj = {
        id: id,
        title: title,
        description: description,
        status: status,
        due: due
    };

    // localStorage.setItem(id, JSON.stringify(task_obj));

    // const task = {
    //     id = id,
    //     title: document.getElementById('title').value,
    //     description: document.getElementById('description').value,
    //     subtasks: document.getElementById('subtasks').value,
    //     status: document.getElementById('status').value
    // };

    // let TODO = JSON.parse(localStorage.getItem('TODO'));
    // let DOING = JSON.parse(localStorage.getItem('DOING'));
    // let DONE = JSON.parse(localStorage.getItem('DONE'));

    // if(task_obj.status === "TODO") {
    //     TODO.push(task_obj);
    //     localStorage.setItem('TODO', JSON.stringify(TODO));
    //     }
    // else if (task_obj.status === "DOING") {
    //     DOING.push(task_obj);
    //     localStorage.setItem('DOING', JSON.stringify(DOING));
    // }
    // else { // DONE
    //     DONE.push(task_obj);
    //     localStorage.setItem('DONE', JSON.stringify(DONE));
    // }

    // form.reset();
    

}


function redirectToMain() {
    window.location.href = "main_page.html";
}