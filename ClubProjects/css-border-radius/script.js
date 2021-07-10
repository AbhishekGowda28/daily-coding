const copy = document.getElementById("copy");
const topMarker = document.querySelector("div.marker.top input");
const bottomMarker = document.querySelector("div.marker.bottom input");
const leftMarker = document.querySelector("div.marker.left input");
const rightMarker = document.querySelector("div.marker.right input");
const parentContainer = document.getElementById("container");
const styleContainer = document.getElementById("style-container");

let text = `border-radius: ${Number(topMarker.value)}px ${Number(rightMarker.value)}px ${Number(bottomMarker.value)}px ${Number(leftMarker.value)}px;`;

styleContainer.innerText = text;

copy.addEventListener("click", CopyStyle);
parentContainer.addEventListener("input", SliderInput);

function CopyStyle(_event) {
    navigator.clipboard.writeText(text);
}

function SliderInput(_event) {
    styleContainer.innerText = `border-radius: ${Number(topMarker.value)}px ${Number(rightMarker.value)}px ${Number(bottomMarker.value)}px ${Number(leftMarker.value)}px;`;
    text = styleContainer.innerText;
    parentContainer.style.borderTopLeftRadius = `${Number(topMarker.value)}px`
    parentContainer.style.borderTopRightRadius = `${Number(rightMarker.value)}px`
    parentContainer.style.borderBottomLeftRadius = `${Number(leftMarker.value)}px`
    parentContainer.style.borderBottomRightRadius = `${Number(bottomMarker.value)}px`
}
