
// var n = 2;
// function fun(num) {
//     ans = num * num;
//     return ans;
// }
// var square2 = fun(n);
// var square4 = fun(4);

// var x = 2;
// const getName = () => {
//     console.log("Sachin" + x);
//     var x = 10;
// }

// getName();
// console.log(x);
// console.log(x + x);


// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();


// const a = 10;
// console.log(a);
// let b = 20;
// var c = 30;



// const a = 100; //shadowing    -> we can't shadow a let using var (illegle shadowing) but we can do the opposit<-
// {
//     const a = 10;
//     var b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);;
//     console.log(c);
// }
// console.log(a);
// // console.log(b);;
// // console.log(c);



// //CLOSURE


// function a() {
//     var b = 10;
//     function c() {
//         console.log(b);;
//     }
//     c()
// }
// a();


//Examp;le
function a() {
    var b = 10;
    function c() {
        console.log(b);
    }
    b = 100;
    return c;
}
let d = a();
//.....
d();