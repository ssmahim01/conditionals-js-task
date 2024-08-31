let bmiWeight = 50;
let bmiHeight = 24.9;
let BMI = bmiWeight / (bmiHeight * bmiHeight);
console.log(BMI.toFixed(1));

if(bmiWeight < 18.5){
    console.log("You are underweight");
}
else if(bmiWeight >= 18.5 && bmiHeight <= 24.9) {
    console.log("You are normal");
} 
else if(bmiWeight >= 25 && bmiHeight <= 29.9){
    console.log("You are Overweight");
}
else {
    console.log("You are obese");
}

// BMI result is 0.1 and You are normal cause your bmi weight is more than 18.5kg and bmiHeight is 24.9m.