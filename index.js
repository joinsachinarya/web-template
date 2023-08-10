// let storedItems = JSON.parse(localStorage.getItem("items")) || [];
const loadItemsData = ()=>{
    axios.get("https://crudcrud.com/api/a2b8a9f39da84a1d999c0b1270e8f36d/posteddata")
    .then((storedItems)=>{
        storedItems.data.forEach(element => {
            let li = document.createElement("li");
            li.innerHTML = `
            <span>Name: ${element.name}</span>
            <span>Email: ${element.email}</span>
            <span>Phone: ${element.phone}</span>
            `
            items.appendChild(li);
        });
    })
    .catch((err)=>{
        console.error(err);
    })
}



// document.addEventListener("DOMContentLoaded",()=>{
//     if(storedItems){
//         storedItems.forEach(element => {
//             let li = document.createElement("li");
//             li.innerHTML = `
//             <span> Name: ${element.name}</span>
//             <span> Email: ${element.email}</span>
//             <span> Phone: ${element.phone}</span>
//             `
//             items.appendChild(li);
//         });
//     }
// })


document.addEventListener("DOMContentLoaded", loadItemsData);

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
    let object = {
        name:nameValue,
        email:emailValue,
        phone:phoneValue
    }

    // storedItems.push(object);
    // localStorage.setItem("items", JSON.stringify(storedItems));

    axios.post("https://crudcrud.com/api/a2b8a9f39da84a1d999c0b1270e8f36d/posteddata", object)
    .then((res)=>{
        items.appendChild(li);
    })
    .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + "<h2>Something went wrong";
        console.error(err);
    })
    form.reset();
}
