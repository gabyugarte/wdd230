const input = document.querySelector("#input");
const button = document.querySelector("#add-chapter");
const list = document.querySelector("#list");

button.addEventListener("click", function() {
  if (input.value === "") {
    return;
  }

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = input.value;
  deleteButton.textContent = "❌";

  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(deleteButton);
  list.appendChild(li);
  input.value = "";
  input.focus();
});