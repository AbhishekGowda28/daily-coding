var btn = document.getElementById('btn');

btn.addEventListener("click", incrementBtnLabel);

function incrementBtnLabel() {
    var value = btn.innerHTML;
    btn.value = ++value;
    btn.innerHTML = value;
}