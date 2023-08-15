//problem
console.log("a");
console.log("b");
setTimeout(() => console.log("c"), 3000);
setTimeout(() => console.log("d"), 0);
console.log("e");

//callback solution
console.log("a");
console.log("b");
setTimeout(() => {
  console.log("c");
  setTimeout(() => {
    console.log("d");
    console.log("e");
  }, 0);
}, 3000);

//callback solution :: functions
function a() {
  console.log("a");
}
function b() {
  console.log("b");
}
function c(callback, callback2) {
  setTimeout(() => {
    console.log("c");
    callback(callback2);
  }, 3000);
}
function d(callback) {
  setTimeout(() => {
    console.log("d");
    callback();
  }, 0);
}
function e() {
  console.log("e");
}
a();
b();
c(d, e);

//promise solution
function a() {
  console.log("a");
}
function b() {
  console.log("b");
}
function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c");
      resolve();
    }, 3000);
  });
}
function d() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("d");
      resolve();
    }, 0);
  });
}
function e() {
  console.log("e");
}
a();
b();
c()
  .then(() => {
    return d();
  })
  .then(() => {
    return e();
  });

//promise solution :: async await syntax
function a() {
  console.log("a");
}
function b() {
  console.log("b");
}
function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c");
      resolve();
    }, 3000);
  });
}
function d() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("d");
      resolve();
    }, 0);
  });
}
function e() {
  console.log("e");
}
a();
b();
async function run() {
  await c();
  await d();
  e();
}
run();
