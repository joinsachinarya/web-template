const promise1 = 10;
const promise2 = Promise.resolve("data2");
const promise3 = new Promise((resolve, reject) => {
    resolve("Data3");
}, 1000);
const promise4 = fetch("https://api.github.com/users/sac6inarya")
    .then((res) => {
        return res.json();
    })

Promise.all([promise1, promise2, promise3, promise4]).then((value) => {
    console.log(value);
})