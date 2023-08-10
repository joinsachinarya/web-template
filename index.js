let items = document.getElementById("list-container");
let form = document.getElementById("form");

const loadItemsData = () => {
    axios.get("https://crudcrud.com/api/a2b8a9f39da84a1d999c0b1270e8f36d/posteddata")
    .then((storedItems) => {
        items.innerHTML = ""; // Clear existing items before loading new ones
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

    axios.post("https://crudcrud.com/api/a2b8a9f39da84a1d999c0b1270e8f36d/posteddata", object)
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
    axios.delete(`https://crudcrud.com/api/a2b8a9f39da84a1d999c0b1270e8f36d/posteddata/${id}`)
    .then((res) => {
        let targetEle = e.target.parentElement;
        items.removeChild(targetEle);
        console.log("Deleted");
    })
    .catch((err) => {
        console.error(err);
    });
}


function editItem(id) {
    axios.get(`https://crudcrud.com/api/a2b8a9f39da84a1d999c0b1270e8f36d/posteddata/${id}`)
    .then((res) => {
        let currentItem = res.data;
        let newName = prompt("Edit name", currentItem.name); 
        let newEmail = prompt("Edit email", currentItem.email); 
        let newPhone = prompt("Edit phone", currentItem.phone); 

        axios.put(`https://crudcrud.com/api/a2b8a9f39da84a1d999c0b1270e8f36d/posteddata/${id}`, {
            name: newName,
            email: newEmail,
            phone: newPhone
        })
        .then((res) => {
            console.log("Updated");
            loadItemsData(); 
        })
        .catch((err) => {
            console.error(err);
        });
    })
    .catch((err) => {
        console.error(err);
    });
}