document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const taskDisplay = document.querySelector(".task-display p");

  const progressContainer = document.createElement("div");
  progressContainer.classList.add("progress-container");
  progressContainer.innerHTML = `<p id="progress-text">0/0</p><progress id="progress-bar" value="0" max="0"></progress>`;
  document.querySelector(".todo").appendChild(progressContainer);
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");

  function updateMessage() {
    taskDisplay.style.display = taskList.children.length ? "none" : "block";
    updateProgress();
  }

  function updateProgress() {
    const tasks = document.querySelectorAll(".task-item");
    const completedTasks = document.querySelectorAll(".task-item.completed");
    progressText.textContent = `${completedTasks.length}/${tasks.length}`;
    progressBar.max = tasks.length;
    progressBar.value = completedTasks.length;
  }

  function addTask(taskText) {
    if (taskText.trim() === "") {
      return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");

    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;

    textSpan.classList.add("task-text");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("task-checkbox");

    checkBox.addEventListener("change", () => {
      li.classList.toggle("completed", checkBox.checked);
      if (checkBox.checked) {
        textSpan.style.textDecoration = "line-through";
        textSpan.style.color = "gray";
      } else {
        textSpan.style.textDecoration = "none";
        textSpan.style.color = "black";
      }
      updateProgress();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
      updateMessage();
    });

    li.appendChild(checkBox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    updateMessage();
  }

  addTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskInput.value);
  });

  updateMessage();
});
