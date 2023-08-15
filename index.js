// (()=>{
//     console.log(arguments);
// })()

function sum(a, b) {
  return (a += b);
}

console.log(sum(6, 5)); //11
console.log(sum(6, 5)); //11
console.log(sum(6, 5)); //11

let a = 6;
function sum2(b) {
  return (a += b);
}
console.log(sum2(5)); //11
console.log(sum2(5)); //16
console.log(sum2(5)); //21
