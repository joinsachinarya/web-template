const form = document.getElementById("form");
const submit = document.getElementsByTagName("button");
const sendData = (e) => {
  e.preventDefault();
  console.log(e.target.name.value, e.target.age.value);
  axios
    .post("http://localhost:4000/add", {
      name: e.target.name.value,
      age: e.target.age.value,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
form.addEventListener("submit", sendData);

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:4000/all-users")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
});
