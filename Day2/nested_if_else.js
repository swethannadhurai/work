var num = 10;
if(num === 0){
    console.log("Neutral");
}
else if(num > 0){
    if(num < 10){
        console.log("Single digit positive number");
    }
    else{
        console.log("Double digit positive number");
    }
}
else{
    console.log("negative");
}