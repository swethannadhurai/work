async function myFunction(){
    return "Hello!"; //promise inside hello
}
myFunction().then((msg)=>{
    console.log(msg);// hello!
});

async function example(){
    let result = await Promise.resolve("Data Loaded!!!");   
    console.log(result);
}
example();