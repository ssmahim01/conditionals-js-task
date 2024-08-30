let ticketPrice = 800;
let childrenAge = 12;
let studentAge = 18;
let seniorCitizensAge = 60;

if(childrenAge < 10){
    console.log('Free');
}

// 50% discount
else if(!studentAge){
    let firstDiscount = (ticketPrice * 50 / 100);
    console.log(firstDiscount);
}

// 15% discount
else if(seniorCitizensAge >= 60){
    let secondDiscount = (ticketPrice * 15 / 100);
    console.log(secondDiscount);
}

else {
    console.log('Regular ticket fare 800tk');
}

// Ticket fare got 120tk with 15% discount.