console.log("a");
console.log("b");
function c() {
  setTimeout(() => {
    console.log("c");
    function d() {
      console.log("d");
    }
    d();
  }, 2000);
}
c();
