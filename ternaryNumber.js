let num1 = 10;
let num2 = 20;

if(num1 > num2){
    let num1 = num1 * num1;
    console.log(num1);
}
else{
    let total = num1 + num2;
    console.log(total);
}

console.log(num1 > num2? num1 * num1 : num1 + num2);

// Ternary operator and simple if-else is return the same result(30).