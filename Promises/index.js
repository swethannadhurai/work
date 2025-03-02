const promiseObj = new Promise((resolve,reject)=>{
   console.log("Promise is created");
   setTimeout(()=>{
    resolve("Promise is resolved");
     //reject("Promise is rejected");
   },1000)
})

promiseObj.then(
    resolve("Promise is fulfilled")
)