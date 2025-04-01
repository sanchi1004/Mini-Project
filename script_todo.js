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
});
