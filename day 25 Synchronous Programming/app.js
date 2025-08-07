/**
 * for
 * for of
 * for in
 */
const arr = [1,5,4,2,6,4]
// for(let i = 0 ; i<arr.length;i++){
//     console.log(arr[i]);   
// }
//for(let i of arr){
//console.log(i);
// }console.log(i);

const obj ={
    name:"Sunny",
    age:23,
    address:"abc delhi"
}
for(let i in obj){
    console.log(i,":",obj[i]);
    
}