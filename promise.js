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
            const err = true;
            if (err) {
                reject("Error!");
            } else {
                resolve();
            }
        }, 2000);

    })
}
create({ name: "third post" })
    .then(show)
    // .catch(err => console.error(err))