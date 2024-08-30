let myMark = 75;
let friendMark = 82;

if(myMark > 80){
    console.log("Inside friend score");
}
else if (friendMark > 80){
    console.log("Go for a lunch");
}
else if(friendMark < 80 || friendMark >= 60){
    console.log("Good luck next time");
}
else if (friendMark < 60 || friendMark >= 40){
    console.log("Keep to friend's message unseen");
}
else if(friendMark < 40){
    console.log("Block friend");
}

else{
    console.log("Go to home then sleep and feel sad");
}

// Go for a lunch cause friend got more mark than 80.