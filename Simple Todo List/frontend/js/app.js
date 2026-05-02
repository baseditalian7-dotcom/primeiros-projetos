const form = document.querySelector("#todoForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const emptyMessage = document.querySelector("#emptyMessage");
const totalTasks = document.querySelector("#totalTasks");
const doneTasks = document.querySelector("#doneTasks");
const pendingTasks = document.querySelector("#pendingTasks");

const storageKey = "simple_todo_list_tasks";

function loadTasks() {
    const savedTasks = localStorage.getItem(storageKey);

    if (!savedTasks) {
        return [];
    }

    return JSON.parse(savedTasks);
}

function saveTasks(tasks) {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function createTask(title) {
    return {
        id: Date.now(),
        title: title,
        done: false
    };
}

function addTask(title) {
    const tasks = loadTasks();
    const newTask = createTask(title);

    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks();
}

function removeTask(taskId) {
    const tasks = loadTasks();
    const updatedTasks = tasks.filter(function (task) {
        return task.id !== taskId;
    });

    saveTasks(updatedTasks);
    renderTasks();
}

function toggleTask(taskId) {
    const tasks = loadTasks();

    const updatedTasks = tasks.map(function (task) {
        if (task.id === taskId) {
            return {
                id: task.id,
                title: task.title,
                done: !task.done
            };
        }

        return task;
    });

    saveTasks(updatedTasks);
    renderTasks();
}

function updateSummary(tasks) {
    const doneCount = tasks.filter(function (task) {
        return task.done;
    }).length;

    totalTasks.textContent = tasks.length;
    doneTasks.textContent = doneCount;
    pendingTasks.textContent = tasks.length - doneCount;
}

function renderTasks() {
    const tasks = loadTasks();

    taskList.innerHTML = "";
    emptyMessage.style.display = tasks.length === 0 ? "block" : "none";
    updateSummary(tasks);

    tasks.forEach(function (task) {
        const item = document.createElement("li");
        item.className = task.done ? "task-item done" : "task-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", function () {
            toggleTask(task.id);
        });

        const title = document.createElement("span");
        title.textContent = task.title;

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-button";
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", function () {
            removeTask(task.id);
        });

        item.appendChild(checkbox);
        item.appendChild(title);
        item.appendChild(removeButton);
        taskList.appendChild(item);
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskInput.value.trim();

    if (title === "") {
        return;
    }

    addTask(title);
    form.reset();
    taskInput.focus();
});

renderTasks();
