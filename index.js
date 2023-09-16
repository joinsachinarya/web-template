const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value!");
});

async function fun() {
  // return p;
  return "Direct value!";
}
let data = fun();

data.then((result) => {
  console.log(result);
});
