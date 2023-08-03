//SHALLOW COPY:  copies top level object and nested's references.
//DEEP COPY:  copies all level of the object

const obj = {
    name: "sac",
    age: 22,
    address: {
        city: "Lucknow",
        country: "India"
    },
    getName: function () {
        console.log(this.name);
    }
}


// Methods to create copy //

//1: direct assignment : new and original object will have same reference (not a copy)
const obj2 = obj;


//2: spread operator : create shallow copy
const obj3 = { ...obj };

//3: Object.assign : create shallow copy
const obj4 = Object.assign({}, obj)


//4: using JSON.strigyfy and JSON.pares : create deep copy for even nested object but methods inside object can not be copied (serialization-deserialization)
const obj5 = JSON.parse(JSON.stringify(obj));
obj5.address.city = "sachin";

//5: using lodash's _.cloneDeep() method : create deep copy
const obj6 = _.cloneDeep(obj);

console.log("obj", obj);
// console.log("obj2", obj2);
// console.log("obj3", obj3);
// console.log("obj4", obj4);
// console.log("obj5", obj5);
console.log("obj6", obj6);