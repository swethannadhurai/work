var x = 10;//global scope
function display(){
    var y = 200
    var x = 20;
    console.log(x);   //local scope - within the function/ block of statement
}
display();
console.log(x); 
console.log(y); // y is not defined. becaz local scope are within the function/block of statement 
