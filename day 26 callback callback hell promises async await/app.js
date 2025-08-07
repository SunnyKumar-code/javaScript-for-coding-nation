//CallBack



// function getData(data, callback) {
//     setTimeout(() => {
//         console.log(data);
//         if (callback) {
//             callback()
//         }

//     }, 2000)
// }
// function greet(){
//     console.log("welcome");   
// }
// getData(45,greet)

//CallBack Hell
// console.log("Fetching Data 1");
// getData(1, () => {
//     console.log("Fetching Data 2");
//     getData(2, () => {
//         console.log("Fetching Data 3");
//         getData(3, () => {
//             console.log("Fetching Data 4");
//             getData(4)
//         })
//     })
// })

//Promise

// const promise =new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//         console.log("I M Promise");
//         resolve("Success")
//     },2000)
// })
// console.log(promise);

//CallBack Hell Solution by promise
// function getData(data){
//     return promise = new Promise((resolve,reject)=>{
//         console.log("fetching Data",data);
//         setTimeout(()=>{
//             console.log("Data",data);
//             resolve("Success") 
//             //reject("Fail")
//         },2000)
        
//     })
// }
// getData(1).then((res)=>{
//     return getData(2).then((res)=>{
//         getData(3).then((res)=>{
//             getData(4).then((res)=>{
//                 console.log(res);
//             })
//         })
//     })
// }).catch((err)=>{
// console.log(err);
// })


//async await

function getData(data){
    return promise = new Promise((resolve,reject)=>{
        console.log("fetching Data",data);
        setTimeout(()=>{
            console.log("Data",data);
            resolve("Success") 
            //reject("Fail")
        },2000)
        
    })
}

async function callPromise() {
    await getData(1)
     await getData(2)
      await getData(3)
       await getData(4)
        await getData(5)
         await getData(6)
          await getData(7)
}
// callPromise()

//IIFE

(function (){
 console.log("I M IIFE");

 })()

