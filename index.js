// // // this with regular function
// // class Student{
// //     constructor(name, age, marks){
// //         this.name = name;
// //         this.age = age;
// //         this.marks = marks;
// //     }
// //     isReadyForPlacement(minAge){
// //         console.log("outer function",this);
// //         return function isMarksGood(minMarks){
// //             if(this.age>minAge && this.marks>minMarks){
// //                 console.log("inner function", this);
// //                 console.log(`${this.name} is ready for placement`);
// //             }else{
// //                 console.log(`${this.name} is not ready for placement`);
// //             }
// //         }
// //     }
// // }



// // this with arrow function
// class Student{
//     constructor(name, age, marks){
//         this.name = name;
//         this.age  = age;
//         this.marks = marks;
//     }
//     isReadyForPlacement(minAge){
//         console.log("outer function", this);
//         return (minMarks)=>{
//             console.log("inner function", this);
//             if(this.age>minAge && this.marks>minMarks){
//                 console.log(`${this.name} is ready for placement`);
//             }else{
//                 console.log(`${this.name} is not ready for placement`);
//             }
//         }
//     }
// }


// // // this with arrow function :: this does not create it's own context instead it find the value of this from it's lexical parent
// // class Student{
// //     constructor(name, age, marks){
// //         this.name = name;
// //         this.age  = age;
// //         this.marks = marks;
// //     }
// //     isReadyForPlacement(minAge){
// //         console.log("outer function", this);
// //         return (minMarks)=>{
// //             console.log("inner function", this);
// //             return (maxGap)=>{
// //                 console.log("inner inner function ", this);
// //                 if(this.age>minAge && this.marks>minMarks && maxGap<=2){
// //                     console.log(`${this.name} is ready for placement`);
// //                 }else{
// //                     console.log(`${this.name} is not ready for placement`);
// //                 }
// //             }
// //         }
// //     }
// // }

// const sachin = new Student("sachin", 20, 50);
// sachin.isReadyForPlacement(16)(33);



function myFun(){
    console.log(arguments);
}
myFun(1,2,3)

(()=>{
    console.log(arguments);
})()

