document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    //The forked project element target id was new-task-description was bugy so i changed it to new_task_description
    addNewTask(e.target.new_task_description.value);
    form.reset();
  })
});

function addNewTask(newtask) {
  let taskContent = document.createElement('p');
  let deleteBtn = document.createElement('button');
  let editBtn = document.createElement('button');
  deleteBtn.addEventListener('click', handleDelete);
  //editBtn.addEventListener('click', handleEditing);
  deleteBtn.textContent = "del";
  editBtn.textContent = "edit";
  taskContent.textContent = newtask;
  taskContent.appendChild(deleteBtn);
  taskContent.appendChild(editBtn);
  document.querySelector('#tasks').appendChild(taskContent)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
