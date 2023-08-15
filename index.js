function a() {
  console.log("a");
}
function b() {
  console.log("b");
}

function c() {
  setTimeout(() => {
    console.log("c");
    function d() {
      console.log("d");
      function e() {
        console.log("e");
        function f() {
          console.log("f");
        }
        f();
      }
      e();
    }
    d();
  }, 2000);
}

a();
b();
c();
