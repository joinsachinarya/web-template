let storedItems = JSON.parse(localStorage.getItem("items")) || [];

document.addEventListener("DOMContentLoaded",()=>{
    if(storedItems){
        storedItems.forEach(element => {
            let li = document.createElement("li");
            li.innerHTML = `
            <span> Name: ${element.name}</span>
            <span> Email: ${element.email}</span>
            <span> Phone: ${element.phone}</span>
            `
            items.appendChild(li);
        });
    }
})

let items = document.getElementById("list-container");
let form = document.getElementById("form");

form.addEventListener("submit",addItem);

function addItem(e){
    e.preventDefault()
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let phoneValue = document.getElementById("phone").value;

    let li = document.createElement("li");
    li.innerHTML = `
    <span> Name: ${nameValue}</span>
    <span> Email: ${emailValue}</span>
    <span> Phone: ${phoneValue}</span>
    `
    
    items.appendChild(li);

    let object = {
        name:nameValue,
        email:emailValue,
        phone:phoneValue
    }

    storedItems.push(object);
    localStorage.setItem("items", JSON.stringify(storedItems));

    form.reset();
}
