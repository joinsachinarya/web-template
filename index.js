//problem
function a() {
  console.log("a");
}
function b() {
  setTimeout(() => {
    console.log("b");
  }, 2000);
}
function c() {
  console.log("c");
}
a();
b();
c();

// callback solution
function a() {
  console.log("a");
}
function b(callback) {
  setTimeout(() => {
    console.log("b");
    callback();
  }, 2000);
}
function c() {
  console.log("c");
}
a();
b(c);

// promise solution
function a() {
  console.log("a");
}
function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("b");
      resolve();
    }, 2000);
  });
}
function c() {
  console.log("c");
}
a();
b().then(() => {
  c();
});

// async syntax promise solution
function a() {
  console.log("a");
}

function b() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("b");
      resolve();
    }, 2000);
  });
}

function c() {
  console.log("c");
}
a();
async function run() {
  await b();
  c();
}
run();
