let Todo_container = document.querySelector(".Todo-container");
let Todo_app = document.querySelector(".Todo-app");
let Items = document.querySelector(".Items");

let count = 0;

getData = (get_data) => {
    count += 1;
    if (count <= 6) {
        let list_item = document.createElement("li");
        list_item.classList.add("todo-item"); // Add a class for styling

        let Delete_btn = document.createElement("button");
        Delete_btn.textContent = "Delete";
        Delete_btn.classList.add("Delete"); // Add class for styling

        let Done_btn = document.createElement("button");
        Done_btn.textContent = "Done";
        Done_btn.classList.add("Done"); // Add class for styling

        list_item.innerHTML = `
      ${get_data}
      ${Delete_btn.outerHTML}
      ${Done_btn.outerHTML}
    `;
        Items.appendChild(list_item);

        Todo_app.value = ""; // Clear input field
    }
};

// Event delegation for click events
Items.addEventListener("click", function (event) {
    if (event.target.classList.contains("Delete")) {
        // Delete button clicked
        const parentListItem = event.target.closest(".todo-item"); // Efficiently target the parent list item
        parentListItem.parentNode.removeChild(parentListItem);
        count--;
    } else if (event.target.classList.contains("Done")) {
        // Done button clicked
        const parentListItem = event.target.closest(".todo-item");
        parentListItem.style.textDecoration = "line-through";
        // Add your desired functionality for the "Done" button
        // (e.g., toggle a class to visually mark the item as done)
    }
});

Todo_app.addEventListener("keydown", function (evt) {
    if (evt.key === "Enter") {
        getData(this.value); // Access input value directly
    }
});
