var type = document.querySelector(".type");
var code = document.querySelector(".code");
var bold = document.querySelector(".bold");


console.log(type);
console.log(code);


type.addEventListener("click",displayContent);
code.addEventListener("click", removeCodeContent);
bold.addEventListener("click", changeSelectionToBold);

function displayContent(){
    var regex = /^\w+[^\r]+$/gi;
    data = type.innerText;
    // console.log(regex.test(data));
    if (regex.test(data))
        code.innerText = "<p>"+data+"</p>";
    else
        code.innerText="";
}

function removeCodeContent(){
    code.innerText = "";
}


function changeSelectionToBold(event) {
    console.log("Text selection is bolded", event);
}