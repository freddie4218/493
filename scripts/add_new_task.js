$(document).ready( function() {
    console.log("Ready!");
    document.getElementById("newTask").addEventListener("click", storeTask);
    // document.getElementById("newTask").addEventListener("click", redirectToMain);
});


function storeTask() {
    let title = document.getElementById("title").value;
    if (title.trim() === '') {
        alert('Please enter a value for title');
        return
      }
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    let due = document.getElementById("due-date").value;

    let id = parseInt(localStorage.getItem("prev_id")) + 1;
    localStorage.setItem("prev_id", id);
    
    event.preventDefault();
    let task_obj = {
        id: id,
        title: title,
        description: description,
        status: status,
        due: due
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


// function redirectToMain() {
//     window.location.href = "main_page.html";
// }