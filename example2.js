const posts = [{ title: 'POST1' }];

function print(item) {
    posts.forEach((item) => {
        console.log(item.title);
    })
}

//Do not touch this function
function create2ndPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST2' });
            resolve()
        }, 3000)
    })
}
//Do not touch this function
function create3rPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve();
        }, 2000)
    })
}

//Do not touch this function
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
create2ndPost()
    .then(() => {
        const val = deletePost();
        return val;
    })
    .then((val) => {
        console.log(val.title);
        return create3rPost();
    })
    .then(() => {
        const val = deletePost();
        return val;
    })
    .then((val) => {
        console.log(val.title);
        const val2 = deletePost();
        return val2;
    })
    .then((val) => {
        console.log(val.title);
        const val2 = deletePost();
        return val2;
    })
    .then((val) => {
        console.log(val.title);
        const val2 = deletePost();
        return val2;
    })
    .then((val) => {
        console.log(val.title);
        const val2 = deletePost();
        return val2;
    })
    .then((val) => {
        console.log(val.title);
        const val2 = deletePost();
        return val2;
    })
    .catch((err) => {
        console.log(err);
    })
