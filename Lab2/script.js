const list = document.querySelector(".todolist");
const addButton = document.querySelector(".addButton");
const inputElement = document.querySelector(".inputElement");
const filterButtons = document.querySelectorAll(".filter");

let todos = [];
let currentFilter = "all";

function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  todos.push({ id: Date.now(), text: trimmed, completed: false });
  inputElement.value = "";
  render();
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  render();
}

function toggleTodo(id) {
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  render();
}

function setFilter(filter) {
  currentFilter = filter;
  filterButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.filter === filter)
  );
  render();
}

function getVisibleTodos() {
  if (currentFilter === "active") return todos.filter((t) => !t.completed);
  if (currentFilter === "completed") return todos.filter((t) => t.completed);
  return todos;
}

function render() {
  list.innerHTML = "";
  const items = getVisibleTodos();
  items.forEach(({ id, text, completed }) => {
    const li = document.createElement("li");

    const left = document.createElement("div");
    left.className = "todo-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => toggleTodo(id));

    const span = document.createElement("span");
    span.className = "todo-text" + (completed ? " completed" : "");
    span.textContent = text;

    left.appendChild(checkbox);
    left.appendChild(span);

    const del = document.createElement("button");
    del.className = "btn-delete";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteTodo(id));

    li.appendChild(left);
    li.appendChild(del);

    list.appendChild(li);
  });
}

addButton.addEventListener("click", () => addTodo(inputElement.value));
inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo(inputElement.value);
});
filterButtons.forEach((btn) =>
  btn.addEventListener("click", () => setFilter(btn.dataset.filter))
);

render();
