let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
}

function deleteTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  renderTasks();
}

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();
  if (value) {
    tasks.push(value);
    saveTasks();
    renderTasks();
    input.value = "";
  }
});

renderTasks();