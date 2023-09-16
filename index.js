const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value!");
});

async function fun() {
  // let data = p.then((res) => console.log(res)); // Promise resloved using .then /.catch
  // return data;
  let data = await p; // Promise resolved using async, await
  console.log(data);
}
fun();
