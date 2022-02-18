const btn = document.getElementById('subbtn');
const tasks = document.getElementById('listflex');
const data = document.getElementById('data');
let i = 1;
tasks.innerHTML += `
        <div class="task2" id="notask">
            <h3>You dont have tasks!</h3>
        </div>
        `
btn.addEventListener('click', ()=>{
    if (i == 1) {
        h = document.querySelector("#notask");
        h.innerHTML = "";
        h.innerHTML += `<div class="task2" id="notask">
        <h3>Your tasks:</h3>
    </div>`;
    }
    txt = String(data.value);
    if (txt.length >= 1) {
        new_task = document.createElement("div");
        new_task.className = "task";
        new_task.id = String(i);
        let cross_button = document.createElement('button');
        cross_button.id = String(i);
        cross_button.className="crossbtn";
        cross_button.innerHTML = "change state"
        cross_button.addEventListener('click', ()=> {
            cur_task = document.getElementById(`${cross_button.id}`);
            cur_task.className == "completed"?cur_task.className="task":cur_task.className="completed";
        })
        let del_btn = document.createElement('button');
        del_btn.id = String(i);
        del_btn.className="delbtn";
        del_btn.innerHTML = 'Delete';
        // console.log(del_btn); 
        del_btn.addEventListener('click', ()=>{
            cur_task = document.getElementById(`${del_btn.id}`)
            // console.log(cur_task);
            cur_task.remove();
        });
        i++;
        new_task.innerHTML += `
        <p>${data.value}</p>
        `
        new_task.appendChild(cross_button)
        new_task.appendChild(del_btn)
        
        tasks.appendChild(new_task);
        data.value = "";
    }   else {
        return;
    }
})