const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value 2!");
  }, 20000);
});

async function fun() {
  // // JS engine will not wait for promise to be resloved
  // console.log("before promise");
  // let data = p.then((res) => console.log(res)); // Promise resloved using .then /.catch
  // console.log("after promise");
  // return data;

  //JS engine will  suspend the execution until promise is not resolved
  console.log("before promise");
  let data = await p; // Promise resolved using async, await
  console.log(data);
  console.log("after promise");

  //JS engine will  suspend the execution until promise is not resolved
  console.log("before promise");
  let data2 = await p2; // Promise resolved using async, await
  console.log(data2);
  console.log("after promise");
}
fun();
