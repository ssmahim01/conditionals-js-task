let bmiWeight = 50;
let bmiHeight = 24.9;
let BMI = bmiWeight / (bmiHeight * bmiHeight);
console.log(BMI.toFixed(1));

if(BMI < 18.5){
    console.log("You are underweight");
}
else if(BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are normal");
} 
else if(BMI >= 25 && BMI <= 29.9){
    console.log("You are Overweight");
}
else {
    console.log("You are obese");
}

// BMI result is 0.1 and You are underweight.