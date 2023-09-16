const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!");
  }, 2000);
});

async function fun() {
  // JS engine will not wait for promise to be resloved
  console.log("before promise");
  let data = p.then((res) => console.log(res)); // Promise resloved using .then /.catch
  console.log("after promise");
  return data;

  // //JS engine will wait for promise to be resolved
  // console.log("before promise");
  // let data = await p; // Promise resolved using async, await
  // console.log(data);
  // console.log("after promise");
}
fun();
