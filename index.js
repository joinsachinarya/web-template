const output = document.querySelector("#output");
const container = document.querySelector("#container");
const handleClick = (e) => {
    output.textContent += `${e.currentTarget.tagName} element was clicked!`
}
output.addEventListener("click", handleClick);

document.body.addEventListener("click", handleClick);
document.querySelector("button").addEventListener("click", handleClick)
container.addEventListener("click", handleClick)