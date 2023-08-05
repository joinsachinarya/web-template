const posts = [
    { name: "first post" }, { name: "second post" }
]

const show = () => {
    setTimeout(() => {
        var output = "";
        posts.forEach((item) => {
            output += `<li>${item.name}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

const create = (post) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);
            const err = false;
            if (!err) {
                resolve();
            } else {
                reject("Error!");
            }
        }, 2000);

    })
}
const promise = create({ name: "third post" });  // since our crete function return pormise object
promise.then(show)
    .catch(err => console.error(err))
