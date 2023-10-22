let obj ={
  a:"abc"
}
console.log(obj.a)//abc
console.log(obj.b)//undefined
console.log(obj.a.charAt(0)) //a
console.log(obj.b?.charAt(0))//undefined
console.log(obj.b.charAt(0))//type error
