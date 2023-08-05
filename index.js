const posts = [{ title: 'POST1' }];


function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let lastActivity = new Date();
            resolve(lastActivity);
        }, 1000);
    })
}

function createPost(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(val);
            resolve()
        }, 3000)
    })
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop();
            resolve();
        }, 1000)
    })
}

function log() {
    posts.forEach((item) => {
        console.log(item.title);
    })
}

createPost({ title: "POST2" })
    .then(() => {
        let uTime = updateLastUserActivityTime();
        return uTime;
    }).then((val) => {
        log();
        console.log(val);
    })
deletePost().then(() => {
    log()
})