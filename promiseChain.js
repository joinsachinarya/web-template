const cart = ["item1", "item2", "item3"];


function addToCart(item4) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //do something like,  cart.push(item4);
            if (item4) {
                const orderId = "12345";
                resolve(orderId);
            } else {
                const err = new Error("Order id not created");
                reject(err);
            }
        }, 2000);
    })
}

function doPayMent(orderId) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //do something
            if (orderId) {
                const orderDetails = { itemName: "itemName", price: "price" };
                resolve(orderDetails);
            } else {
                const err = new Error("Order details not created")
                reject(err);
            }
        }, 2000);
    })
    return myPromise;
}

function showOrderSummery(orderDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //do something
            if (orderDetails) {
                const updatedBalance = "1000"
                resolve(updatedBalance)
            } else {
                const err = new Error("Balence could not updated")
                reject(err);
            }
        }, 2000);

    })
}

function updateMyWallet(updatedBalance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //do something
            if (updatedBalance) {
                const updatedWallt = "400"
                resolve(updatedWallt);
            } else {
                const err = new Error("Wallet could not updated");
                reject(err);
            }
        }, 2000);
    })
}

addToCart("item4")
    .then((orderId) => {
        console.log(orderId);
        return orderId;
    })
    .catch((err) => console.error(err))
    .then((orderDetails) => showOrderSummery(orderDetails))
    .then((updatedBalance) => updateMyWallet(updatedBalance))
    .catch((err) => console.error(err))
    .then(() => {
        console.log("No metter what I will be definietely called.");
    })