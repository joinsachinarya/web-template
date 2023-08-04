const posts = [
    { name: "post one", detail: "this is post one" },
    { name: "post two", detail: "this is post two" }
]

const showPostsOnWeb = () => {
    setTimeout(() => {
        var output = "";
        posts.forEach((item, index) => {
            output += `<li>${item.name}</li>`
        })
        document.body.innerHTML = output;
        console.log("show");
    }, 2000)
};

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
        console.log("create");
    }, 4000);
}
// showPostsOnWeb();
createPost({ name: "post three", detail: "this is post three" }, showPostsOnWeb)