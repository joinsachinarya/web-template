let url = "https://api.github.com/users/sac6inarya";

// function fetchInfo() {
//     const res = fetch(url);
//     return res;
// }
// fetchInfo()
//     .then((data) => {
//         return data.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     })

const fetchInfo = async function () {
    const res = await (await fetch(url)).json();
    console.log(res);
}
fetchInfo();