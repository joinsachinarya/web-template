const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!");
  }, 2000);
});

async function fun() {
  // JS engine will not wait for promise to be resloved
  let data = p.then((res) => console.log(res)); // Promise resloved using .then /.catch
  console.log("Hye");
  return data;

  // //JS engine will wait for promise to be resolved
  // let data = await p; // Promise resolved using async, await
  // console.log("HYE");
  // console.log(data);
}
fun();
