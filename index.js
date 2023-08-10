let items = document.getElementById("list-container");
let form = document.getElementById("form");

const loadItemsData = () => {
    axios.get("https://crudcrud.com/api/0b45b37c78c64f699a10f47c407d2072/posteddata")
    .then((storedItems) => {
        items.innerHTML = "";
        storedItems.data.forEach(element => {
            createListItem(element);
        });
    })
    .catch((err) => {
        console.error(err);
    })
}

document.addEventListener("DOMContentLoaded", loadItemsData);

form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let phoneValue = document.getElementById("phone").value;

    let object = {
        name: nameValue,
        email: emailValue,
        phone: phoneValue
    }

    axios.post("https://crudcrud.com/api/0b45b37c78c64f699a10f47c407d2072/posteddata", object)
    .then((res) => {
        createListItem(res.data);
    })
    .catch((err) => {
        console.error(err);
    });

    form.reset();
}

function createListItem(element) {
    let li = document.createElement("li");

    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    editButton.textContent = "Edit";
    deleteButton.addEventListener("click", (e) => deleteItem(e, element._id));
    editButton.addEventListener("click", () => editItem(element._id));

    li.innerHTML = `
    <span>Name: ${element.name}</span>
    <span>Email: ${element.email}</span>
    <span>Phone: ${element.phone}</span>
    `
    
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    items.appendChild(li);
}

function deleteItem(e, id) {
    axios.delete(`https://crudcrud.com/api/0b45b37c78c64f699a10f47c407d2072/posteddata/${id}`)
    .then((res)=>{
        let targetEle = e.target.parentElement;
        items.removeChild(targetEle);
        console.log(`Element with id, ${id} Deleted`);         
    })
    .catch((err)=>{
        console.error(err);
    })
}


function editItem(id) {
    axios.get(`https://crudcrud.com/api/0b45b37c78c64f699a10f47c407d2072/posteddata/${id}`)
    .then((res)=>{

        let currentValues = res.data;
        axios.put(`https://crudcrud.com/api/0b45b37c78c64f699a10f47c407d2072/posteddata/${id}`, {
            name: prompt("Edit name: ", currentValues.name),
            email: prompt("Edit email: ", currentValues.email),
            phone: prompt("Edit phone: ", currentValues.phone)
        })
        .then((res)=>{
            console.log(`Element with id ${id}, updated`);
            loadItemsData();
        })
        .catch((err)=>{
            console.error(err);
        })

    })
    .catch((err)=>{
        console.error(err);
    })
}