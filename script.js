var input = document.getElementById("hobbyInput");
var button = document.getElementById("addBtn");
var list = document.getElementById("hobbyList");

button.addEventListener("click", function() {
    input = document.getElementById("hobbyInput");
    button = document.getElementById("addBtn");
    list = document.getElementById("hobbyList");
    var hobby = input.value.trim();
    if (hobby) {
        var listItem = document.createElement("li");
        listItem.textContent = hobby;
        list.appendChild(listItem);
        input.value = "";
    }

    // create delete button next to hobby
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        list.removeChild(listItem);
    });
    listItem.appendChild(deleteBtn);
});

// upon entering in input i want it to addevent listent so it works completely
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});