function greet(){
    console.log("Welcome")
}
greet()

function sum(a,b){
    let ans = a+b
    return ans
}
function mal(a,b){
    let ans = a*b
    return ans
}


console.log(sum(12,15));
console.log(mal(12,15));


function calculateFactorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers.";
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      return `The factorial of ${number} is ${factorial}.`;
    }
  }
  
  const result1 = calculateFactorial(5);
  const result2 = calculateFactorial(0);
  const result3 = calculateFactorial(-3);
  
  console.log(result1); // Output: The factorial of 5 is 120.
  console.log(result2); // Output: 1
  console.log(result3); // Output: Factorial is not defined for negative numbers.

  for(let i = 0 ; i<10 ; i++){
    console.log(i);
    
  }