// =========================
// Academic Planner Functions
// =========================

let tasks = [];

function addTask() {

    const taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(taskInput.value);

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskInput.value}
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function completeTask(button) {
    button.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}


// =========================
// Contact Form Validation
// =========================

function validateForm() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("message").value.trim();

    // Check empty fields
    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        message === ""
    ) {
        alert("All fields are required.");
        return false;
    }

    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone validation
    const phonePattern =
        /^[0-9]+$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain digits only.");
        return false;
    }

    alert("Message submitted successfully!");

    return true;
}
