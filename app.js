/*let arr=["one","Two","three","fouR","fIve","six","SEVEN"];
let squa=arr.map((num)=>num*num);
console.log(squa);
let sum=squa.reduce((acc,el)=>acc+el);
const avg=(sum/squa.length);
console.log(avg)
let newArr=arr.map((el)=>el.toUpperCase());
console.log(newArr);*/

const mergeObj=(obj1, obj2)=>({...obj1, ...obj2});
console.log(mergeObj({name:"Shruti",age:16},{Name:"Pinki",Age:44}));