// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value!");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value 2!");
//   }, 20000);
// });

// async function fun() {
//   // // JS engine will not wait for promise to be resloved
//   // console.log("before promise");
//   // let data = p.then((res) => console.log(res)); // Promise resloved using .then /.catch
//   // console.log("after promise");
//   // return data;

//   //JS engine will  suspend the execution until promise is not resolved
//   console.log("before promise");
//   let data = await p; // Promise resolved using async, await
//   console.log(data);
//   console.log("after promise");

//   //JS engine will  suspend the execution until promise is not resolved
//   console.log("before promise");
//   let data2 = await p2; // Promise resolved using async, await
//   console.log(data2);
//   console.log("after promise");
// }
// fun();

//Example
const url = "https://api.github.com/users/sac6inarya";
async function fun() {
  // fetch(url).then((res) => res.json().then((result) => console.log(result)).catch(err=>console.error(err)));
  try {
    let data = await fetch(url);
    let jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.error(error);
  }
}
fun();
