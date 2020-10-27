window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    const element = document.getElementById("p1");
    const target = document.getElementById("drop-zone");
    // Add the  event listener
    element.addEventListener("dragstart", dragstart_handler);
    target.addEventListener("drop", drop_handler);
    target.addEventListener("dragover", dragover_handler);
});


function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    ev.target.style = "background-color: green";
}

function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("source-element");
    ev.target.appendChild(document.getElementById(data));
}

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("source-element", ev.target.id);
}