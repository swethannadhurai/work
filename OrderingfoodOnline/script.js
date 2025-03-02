let orderFood = new Promise((resolve,reject)=>{
    let isFoodReady = true;

    setTimeout(()=>{
        if(isFoodReady){
            resolve("Food is Ready!!");
        }
        else{
            reject("Sorry, the restaurant is closed!");
        }
    },2000);
});

    orderFood
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
console.log("MeanWhile Coding!!")