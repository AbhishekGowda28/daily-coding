const Events = {
    click: "click"
};

const submit_button = document.getElementsByClassName("submit")[0];
const cancel_button = document.getElementsByClassName("reset")[0];
const list = document.getElementsByClassName("contact-list")[0];
let _contact_list = getContactList();

_contact_list.forEach(ele => displayContactList(ele));

cancel_button.addEventListener(Events.click, resetFields);

submit_button.addEventListener(Events.click, () => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    _contact_list = getContactList();
    if (validateInput(name, phone)) {
        const data = {
            id: _contact_list.length + 1,
            name,
            "phone-number": phone
        };
        _contact_list.push(data);
        localStorage.setItem("contact-list", JSON.stringify(_contact_list));
        displayContactList(data);
        resetFields();
    }
});
function validateInput(name, phone) {
    const nameExist = _contact_list.includes(e => e.name === name);
    return name !== "" && phone !== "" && isNaN(phone) === false && nameExist === false && phone.length === 10;
}

function resetFields() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}

function getContactList() {
    const localStorage_contact = localStorage.getItem("contact-list");
    return localStorage_contact === null ? [] : JSON.parse(localStorage_contact);
}

function displayContactList(contact) {
    const domElement = document.createElement("div");
    domElement.className = `grid-item ${contact.id}`
    domElement.innerHTML = `
        <div>${contact.id}</div>
        <div>${contact.name}</div>
        <div>${contact["phone-number"]}</div>
    `;
    list.append(domElement);
}
