// // make other method to part of an other method // FUNCTION BORROWING

// //call method
// const obj = {
//     my_name: "sachin",
//     age: 23
// }
// var val1 = 2;
// var val2 = 4;
// function getName(val1, val2) {
//     console.log(this.my_name + val1 + val2);
// }
// // console.log(getName(val1, val2));
// getName.call(obj, val1, val2)



// //apply method
// const obj = {
//     my_name: "sachin",
//     age: 23
// }
// var val1 = 2;
// var val2 = 4;
// function getName(val1, val2) {
//     console.log(this.my_name + val1 + val2);
// }
// // console.log(getName(val1 + val2));
// getName.apply(obj, [val1, val2])



// //bind method
// const obj = {
//     my_name: "sachin",
//     age: 23
// }
// var val1 = 2;
// var val2 = 4;
// function getName(val1, val2) {
//     // console.log(this.my_name + val1 + val2);
//     res = this.my_name + val1 + val2;
//     return res;
// }
// // console.log(getName());
// let returnedFun = getName.bind(obj)
// console.log(returnedFun(val1, val2));
// console.log(res);










// // Other examples
// //1
// var obj = {

//     val: 100

// }

// function fun(a, b, c) {

//     console.log(this.val + a + b + c)

// }

// const fun2 = fun.bind(obj)



// fun2(1, 2, 3)

// //2
// var obj = {

//     val: 100

// }

// function fun(a, b, c) {

//     console.log(this.val + a + b + c)

// }

// const fun2 = fun.bind(obj)



// fun2(1, 2, 3)


// //3
// var obj = {

//     val: 100

// }

// function fun(a, b, c) {

//     console.log(a)

//     console.log(b)

//     console.log(c)

// }

// fun.call(obj, [3, 4, 5])


// //4
// var obj = {

//     val: 100

// }

// function fun(a) {

//     console.log(this.val + a)

// }

// fun.call(obj)



//5 : arguments object not works inside arrow function
function fun() {
    console.log(arguments);
    console.log([].slice.call(arguments));
}
fun(1, 3, 4)