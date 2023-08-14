let form = document.getElementById("form");
let items = document.getElementById("items-container");

function loadCurrItems() {
    axios.get("https://crudcrud.com/api/35c2ccd0fcd64c0c91b8cb3361fe72fb/myItems")
    .then((res) => {
        items.innerHTML = "";
        res.data.forEach(element => {
            createListItem(element);
        });
    })
    .catch((err) => {
        console.error(err);
    });
}

document.addEventListener("DOMContentLoaded", loadCurrItems);
form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    
    let nameValue = document.getElementById("item-name").value;
    let descriptionValue = document.getElementById("description").value;
    let priceValue = document.getElementById("price").value;
    let quantityValue = document.getElementById("quantity").value;

    let obj = {
        name: nameValue,
        description: descriptionValue,
        price: priceValue,
        quantity: quantityValue
    };

    axios.post("https://crudcrud.com/api/35c2ccd0fcd64c0c91b8cb3361fe72fb/myItems", obj)
    .then((res) => {
        loadCurrItems();
    })
    .catch((err) => {
        console.error(err);
    });
    form.reset();
}

function createListItem(detail) {
    let li = document.createElement("li");
    li.innerHTML = `
    <span>Name: ${detail.name}</span>
    <span>Description: ${detail.description}</span>
    <span>Price: ${detail.price}</span>
    <span>Quantity: ${detail.quantity}</span>
    `;
    
    let button1 = createBuyButton(detail._id, 1);
    let button2 = createBuyButton(detail._id, 2);
    let button3 = createBuyButton(detail._id, 3);
    
    li.appendChild(button1);
    li.appendChild(button2);
    li.appendChild(button3);
    items.appendChild(li);
}

function createBuyButton(id, quantityToBuy) {
    let button = document.createElement("button");
    button.textContent = `Buy${quantityToBuy}`;
    button.addEventListener("click", () => buyItem(id, quantityToBuy));
    return button;
}

function buyItem(id, quantityToBuy) {
    axios.get(`https://crudcrud.com/api/35c2ccd0fcd64c0c91b8cb3361fe72fb/myItems/${id}`)
    .then((res) => {

        let quantity = res.data.quantity;
        updatedQuantity = quantity - quantityToBuy;

        axios.put(`https://crudcrud.com/api/35c2ccd0fcd64c0c91b8cb3361fe72fb/myItems/${id}`, {
            name:res.data.name,
            description:res.data.description,
            price:res.data.price,
            quantity:updatedQuantity
        })
        .then(() => {
            loadCurrItems();
        })
        .catch((err) => {
            console.error(err);
        });

    })
    .catch((err) => {
        console.error(err);
    });
}