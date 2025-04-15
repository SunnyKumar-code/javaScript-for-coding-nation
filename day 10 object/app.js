const user={
    name:"sunny",
    age:23,
    address:"india Delhi",
    skills:["HTML","CSS","js","react"]
}
// user.education="BCA"
// user.name="Coding Nation"
// delete user.education
// console.log(user);


console.log(user["name"])
for( let i in user){
    console.log(`key:${i} value:${user[i]}`);
    
}
