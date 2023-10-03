const output = document.querySelector("#output");
const container = document.querySelector("#container");
const handleClick = (e) => {
    output.textContent = `${e.target.tagName} element was clicked!`
}
output.addEventListener("click", handleClick);
container.addEventListener("click", handleClick)