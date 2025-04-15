// const arr =[1,2,3,4,"hello",true,null]

// console.log(arr[3]);
// console.log("Array length",arr.length);

// for(let i = 0 ; i<arr.length;i++){
//     console.log(`array of ${i} is ${arr[i]}`);  
// }

// for(let i of arr){
//     console.log(`array of ${i}`);  
// }

// const arr = new Array(7)
// arr[6]=5;
// arr[0]="sunny"

// console.log(arr);

const arr = [2,2,5,55,12,10,54]
const joinMe=arr.join(",")
// console.log(typeof(joinMe));

const newArr = joinMe.split(",")
// console.log(newArr);

console.log(newArr);

const numArr = []
for(let i of newArr){
    numArr.push(Number(i))
}

console.log(numArr);

// delete arr[4]
// console.log(arr);



// let checkSome = arr.some(function (i){
//     if(i>5)return true
//     else return false
// })

// let checkEvery = arr.every(function (i){
//     if(i>5)return true
//     else return false
// })

// let checkFind = arr.find(function (i){
//     return i>5
// })
//console.log(arr.sort((a,b)=>b-a));





// arr.push(50)
// console.log(arr);
// arr.pop()
// arr.pop()
// console.log(arr);
// const newArr = arr.splice(2,2)
//console.log(newArr);
// arr.splice(2,2,5,6,8)

// arr.reverse()

// const newArr = arr.slice(0,5)

// console.log(newArr);






