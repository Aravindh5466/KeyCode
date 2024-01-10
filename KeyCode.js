let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function createandappend(keyCode) {
    let listEl = document.createElement("li");
    listEl.textContent = keyCode;
    keyCodeListEl.appendChild(listEl);
}

function onkey(event) {
    createandappend(event.keyCode);
}
userInputEl.addEventListener("keydown", onkey);