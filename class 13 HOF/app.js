//forEach

let arr = [1,85,6,7,2,69,78];

// arr.forEach((num,idx,numbers)=>{
//     console.log(`current value${num} index:${idx} , array:${numbers}`);
    
// })
// arr.forEach(num=>{
//     console.log(`current value:${num}`);
    
// })

// Define an array of 5 products
// const products = [
//     { id: 1, name: 'Product 1', price: 99 },
//     { id: 2, name: 'Product 2', price: 139 },
//     { id: 3, name: 'Product 3', price: 99 },
//     { id: 4, name: 'Product 4', price: 149 },
//     { id: 5, name: 'Product 5', price: 359 }
// ];

// Print each product using forEach
// products.forEach(product => {
//     console.log(`Product ID: ${product.id}`);
//     console.log(`Product Name: ${product.name}`);
//     console.log(`Product Price: $${product.price}`);
//     console.log('---------------------');
// });

// for(ele of arr){
//     console.log(ele);   
// }


/**Sort  */
// arr.sort((a,b)=>a-b) // for ascending
// arr.sort((a,b)=>b-a)// for descending
// console.log(arr);

// Define an array of products with price and name
// const products = [
//     { name: 'Laptop', price: 800 },
//     { name: 'Headphones', price: 50 },
//     { name: 'Phone', price: 600 },
//     { name: 'Keyboard', price: 30 },
//     { name: 'Monitor', price: 200 }
// ];

// // Sort the products by price in descending order
// products.sort((a, b) => b.price - a.price);

// // Print the sorted products
// products.forEach(product => {
//     console.log(`Product: ${product.name}, Price: $${product.price}`);
// });

// console.log("Old Array",arr);
// let newArr = arr.map(num=>{
//     return num*2
// })



// const numbers = [1, 2, 3, 4, 5];

// // const even = arr.filter(num=>num<10)
// const even = arr.filter(num=>{
//    return num<10
// })

// console.log(even);

const numbers = [1, 2, 3, 4, 5];

const sum=numbers.reduce((pre,cur)=>{
    return pre*cur
},1)

console.log(sum);