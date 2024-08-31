let ticketPrice = 800;
let childrenAge = 12;
let studentAge = true;
let seniorCitizensAge = 60;

if(childrenAge < 10){
    console.log('Free');
}

// 50% discount
else if(!studentAge){
    let firstDiscount = (ticketPrice * 50 / 100);
    let payAmount1 = (ticketPrice - firstDiscount);
    console.log(payAmount1);
}

// 15% discount
else if(seniorCitizensAge >= 60){
    let secondDiscount = (ticketPrice * 15 / 100);
    let payAmount2 = (ticketPrice - secondDiscount);
    console.log(payAmount2);
}

else {
    console.log('Regular ticket fare 800tk');
}

// Ticket fare got 680tk with 15% discount.