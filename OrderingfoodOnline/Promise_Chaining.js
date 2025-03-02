function wakeup(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("wake Up!");
        },1000)
    });
    
}
function brushteeth(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Brush your teeth!");
        },2000)
    });
    
}
function makecoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Make Coffee!");
            //reject("Sorry, coffee machine is broken!")
        },1500)
    });
    
}
function readbook(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Read Book!");
        },2500)
    });
    
}
// wakeup()
// .then((msg)=>{
//     console.log(msg);
//     return brushteeth();
// })
// .then((msg)=>{
//     console.log(msg);
//     return makecoffee();
// })
// .then((msg)=>{
//     console.log(msg);
//     return readbook();
// })
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.log("Something went wrong: ",error);
// })

async function morningroutine() {
    try{
        console.log(await wakeup());
        console.log(await brushteeth());
        console.log(await makecoffee());
        console.log(await readbook());
        console.log("end of routine");
    }
    catch(error){
        console.log("Something went wrong: ",error);
        
    }
    
}
morningroutine();