let bmiWeight = 50;
let bmiHeight = (24.9)^2;

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

// You are Overweight cause your bmi weight is more than 25kg and bmiHeight is less than 29.9m